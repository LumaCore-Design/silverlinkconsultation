import type { MetadataRoute } from "next";

// Search engines and AI search/assistant crawlers get the same rules as "*".
const crawlers = [
  "*",
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: crawlers, allow: "/" },
    sitemap: "https://consulting.silverlinkservices.co/sitemap.xml",
  };
}
