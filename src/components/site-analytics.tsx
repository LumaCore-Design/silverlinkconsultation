"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * LumaCore website heatmap: which pages are viewed, where visitors click or tap and how far they
 * scroll (no cookies, nothing typed). Loads once the page is idle, only on the live site. Inside
 * LumaCore's dashboard heatmap view (?lc_heatmap=1 in a frame) the same script draws the heatmap
 * instead, and Google Analytics stays off there so staff views aren't counted as visits.
 */
const HEATMAP_SITE = "consulting-silverlinkservices-co";
const HEATMAP_SCRIPT = "https://app.lumacoredesign.com/heatmap/t.js";

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
    if (!GA_ID) return;
    const host = window.location.hostname;
    if (host === "localhost" || host.endsWith(".vercel.app") || host.endsWith(".lumacore.app")) return;
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
 * click_to_call (tel: links), click_email (mailto:), get_directions (map links) and
 * generate_lead (a contact or quote form submitted). GA's enhanced measurement adds page views,
 * scrolls, outbound clicks, site search, video and file downloads on its own.
 * Renders nothing without NEXT_PUBLIC_GA_ID (local dev and previews).
 */
export function SiteAnalytics() {
  useHeatmap();
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const params = { link_url: href, link_text: (link.textContent ?? "").trim().slice(0, 100), page_path: window.location.pathname };
      if (href.startsWith("tel:")) sendGAEvent("event", "click_to_call", params);
      else if (href.startsWith("mailto:")) sendGAEvent("event", "click_email", params);
      else if (/google\.[a-z.]+\/maps|maps\.google\.|goo\.gl\/maps|maps\.app\.goo\.gl|maps\.apple\.com/i.test(href)) sendGAEvent("event", "get_directions", params);
    };
    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || form.getAttribute("role") === "search" || form.dataset.analytics === "off") return;
      // A lead form asks for a way to reach the person; search and newsletter-only forms don't count.
      const asksForContact = form.querySelector('input[type="email"], input[type="tel"], input[name*="phone" i], input[name*="email" i]');
      if (!asksForContact) return;
      sendGAEvent("event", "generate_lead", { form_id: form.id || form.getAttribute("name") || "form", page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);
  return GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null;
}
