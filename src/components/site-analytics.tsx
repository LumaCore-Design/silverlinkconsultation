"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Google Analytics 4 plus the actions that matter for a small business, as GA events:
 * click_to_call (tel: links), click_email (mailto:), get_directions (map links) and
 * generate_lead (a contact or quote form submitted). GA's enhanced measurement adds page views,
 * scrolls, outbound clicks, site search, video and file downloads on its own.
 * Renders nothing without NEXT_PUBLIC_GA_ID (local dev and previews).
 */
export function SiteAnalytics() {
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
