"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useEffect, useSyncExternalStore } from "react";
import { LEAD_FAILED_EVENT, LEAD_SENT_EVENT, type LeadEventDetail } from "@/lib/lead-events";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * LumaCore website heatmap: which pages are viewed, where visitors click or tap and how far they
 * scroll, plus session recordings with everything typed masked (no cookies). Loads once the page
 * is idle, only on the live site. Inside LumaCore's dashboard heatmap view (?lc_heatmap=1 in a
 * frame) the same script draws the heatmap instead, and Google Analytics stays off there so staff
 * views aren't counted as visits.
 */
const HEATMAP_SITE = "consulting-silverlinkservices-co";
const HEATMAP_SCRIPT = "https://app.lumacoredesign.com/heatmap/t.js";

/** The live domain only: never localhost, Vercel previews or LumaCore staging. */
function isLiveHost() {
  const host = window.location.hostname;
  return !(host === "localhost" || host === "127.0.0.1" || host.endsWith(".vercel.app") || host.endsWith(".lumacore.app"));
}
const noSubscribe = () => () => {};

function inHeatmapView() {
  try {
    if (window.top === window.self) return false;
    return new URLSearchParams(window.location.search).get("lc_heatmap") === "1" || window.sessionStorage.getItem("lc_heatmap") === "1";
  } catch {
    return false;
  }
}
if (typeof window !== "undefined" && GA_ID && inHeatmapView()) (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;

function useHeatmap() {
  useEffect(() => {
    if (!GA_ID || !isLiveHost()) return;
    if (document.querySelector(`script[src="${HEATMAP_SCRIPT}"]`)) return;
    const add = () => {
      const script = document.createElement("script");
      script.src = HEATMAP_SCRIPT;
      script.async = true;
      script.dataset.site = HEATMAP_SITE;
      document.head.appendChild(script);
    };
    const whenIdle = () => (typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(add, { timeout: 4000 }) : setTimeout(add, 1500));
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
  }, []);
}

/**
 * Google Analytics 4 plus the actions that matter for a small business, as GA events:
 * click_to_call (tel: links), click_email (mailto:), get_directions (map links),
 * generate_lead (a call booked in the Calendly widget, reported through src/lib/lead-events.ts
 * once Calendly confirms it) and form_submit_failed (unused here; there's no site form). GA's
 * enhanced measurement adds page views, scrolls, outbound clicks, site search, video and file
 * downloads on its own. Renders nothing without NEXT_PUBLIC_GA_ID or off the live domain.
 */
export function SiteAnalytics() {
  const live = useSyncExternalStore(noSubscribe, isLiveHost, () => false);
  useHeatmap();
  useEffect(() => {
    if (!GA_ID || !live) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const params = { link_url: href, link_text: (link.textContent ?? "").trim().slice(0, 100), page_path: window.location.pathname };
      if (href.startsWith("tel:")) sendGAEvent("event", "click_to_call", params);
      else if (href.startsWith("mailto:")) sendGAEvent("event", "click_email", params);
      else if (/google\.[a-z.]+\/maps|maps\.google\.|goo\.gl\/maps|maps\.app\.goo\.gl|maps\.apple\.com/i.test(href)) sendGAEvent("event", "get_directions", params);
    };
    const onLead = (event: Event) => {
      const detail = (event as CustomEvent<LeadEventDetail>).detail;
      sendGAEvent("event", "generate_lead", { form_id: detail.formId, page_path: window.location.pathname });
    };
    const onLeadFailed = (event: Event) => {
      const detail = (event as CustomEvent<LeadEventDetail>).detail;
      sendGAEvent("event", "form_submit_failed", { form_id: detail.formId, page_path: window.location.pathname, error_type: detail.reason ?? "unknown" });
    };
    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener(LEAD_SENT_EVENT, onLead);
    window.addEventListener(LEAD_FAILED_EVENT, onLeadFailed);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener(LEAD_SENT_EVENT, onLead);
      window.removeEventListener(LEAD_FAILED_EVENT, onLeadFailed);
    };
  }, [live]);
  return GA_ID && live ? <GoogleAnalytics gaId={GA_ID} /> : null;
}
