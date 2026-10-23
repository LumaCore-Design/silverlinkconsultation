import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Silverlink Consultation",
  description: "How Silverlink Consultation handles information from visitors and people who book a consulting call.",
  alternates: { canonical: "/privacy" },
};

const linkClass = "text-primary-600 hover:text-primary-700 underline underline-offset-4 break-all";

const sections = [
  {
    title: "Who runs this site",
    body: (
      <>
        This website is run by Silverlink Services, based in Winn Parish, Louisiana, which offers Starlink consulting calls as Silverlink Consultation. Questions about this policy can go to Silverlink Services through{" "}
        <a href="https://silverlinkservices.co" className={linkClass}>silverlinkservices.co</a>.
      </>
    ),
  },
  {
    title: "Information you give us",
    body: (
      <>
        When you book a consulting call, the booking form (provided by Calendly) asks for your name, email address and any details you add about your issue, and takes the call fee. We use this only to schedule and hold your call, contact you about it and help with your setup.
      </>
    ),
  },
  {
    title: "Google Analytics",
    body: (
      <>
        We use Google Analytics to understand how people find and use this site, such as which pages are visited and whether a call gets booked. Google Analytics uses cookies and collects details like your device, browser, approximate location and the pages you view. It does not tell us who you are. You can opt out on every website with Google&apos;s browser add-on at{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={linkClass}>https://tools.google.com/dlpage/gaoptout</a>.
      </>
    ),
  },
  {
    title: "We don't sell your information",
    body: <>We do not sell or rent your personal information to anyone.</>,
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="bg-white py-24 px-6 border-b-4 border-primary-500">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-[0.9]">Privacy Policy</h1>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Last updated October 2026</p>
          </div>
        </section>

        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4">{section.title}</h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
