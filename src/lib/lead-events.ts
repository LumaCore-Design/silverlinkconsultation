// Lead results for Google Analytics. The booking widget calls reportLeadSent once Calendly
// confirms a scheduled call (a form would call reportLeadFailed when its send fails);
// site-analytics.tsx turns them into generate_lead and form_submit_failed.

export const LEAD_SENT_EVENT = "lumacore:lead-sent";
export const LEAD_FAILED_EVENT = "lumacore:lead-failed";

export type LeadEventDetail = {
  /** A stable name for the form, such as "contact" or "quote". */
  formId: string;
  /** Why it failed: the HTTP status ("http_400"), "network", "verification" or "validation". */
  reason?: string;
};

function dispatch(name: string, detail: LeadEventDetail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<LeadEventDetail>(name, { detail }));
}

export function reportLeadSent(formId: string) {
  dispatch(LEAD_SENT_EVENT, { formId });
}

export function reportLeadFailed(formId: string, reason: string) {
  dispatch(LEAD_FAILED_EVENT, { formId, reason });
}
