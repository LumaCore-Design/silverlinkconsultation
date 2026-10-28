const SITE_URL = "https://consulting.silverlinkservices.co";
const BUSINESS_ID = `${SITE_URL}/#business`;

// Facts below come from the site itself (homepage, footer, privacy page).
// The privacy page says the site is run by Silverlink Services, so the
// entity points at that business as its parent organization.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Silverlink Consultation",
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      image: `${SITE_URL}/images/gallery/IMG_2878.jpg`,
      description:
        "Expert, independent 1-on-1 consulting and troubleshooting for Starlink accounts, hardware and installation issues, by phone call booked online for a flat $25 fee.",
      parentOrganization: { "@id": "https://silverlinkservices.co/#business" },
      makesOffer: {
        "@type": "Offer",
        price: "25",
        priceCurrency: "USD",
        url: `${SITE_URL}/#book-call`,
        itemOffered: {
          "@type": "Service",
          name: "Starlink consulting call",
          description:
            "A scheduled 1-on-1 phone call to troubleshoot Starlink account, hardware and installation issues.",
          provider: { "@id": BUSINESS_ID },
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Silverlink Consultation",
      inLanguage: "en-US",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
