import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { formatDate } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Videe Legal collects, uses, shares and protects your personal data, and how to exercise your rights under the Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "/privacy-notice" },
};

const { grievanceOfficer } = site;

const dataTable = [
  {
    source: "Consultation form",
    data: "Name, work email, company (optional), phone number (optional), service of interest and your message",
    purpose: "To respond to your enquiry, schedule a discovery call and discuss the services you asked about",
  },
  {
    source: "DPDP checklist download",
    data: "Name and work email",
    purpose: "To give you access to the checklist and, occasionally, follow up about it",
  },
  {
    source: "Email, WhatsApp or LinkedIn messages you send us",
    data: "Your name, contact details and the content of your messages",
    purpose: "To reply to you and provide the information or services you request",
  },
  {
    source: "Website hosting (automatic)",
    data: "IP address, browser type, device information and pages requested, recorded in server logs",
    purpose: "To deliver the website securely, prevent abuse and fix technical issues",
  },
];

export default function PrivacyNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Notice"
        intro="We help businesses comply with India's Digital Personal Data Protection Act — and we hold ourselves to the same standard."
      />
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: {formatDate(site.privacyNoticeUpdated)}</p>

          <div className="blog-content mt-8">
            <p>
              This notice explains how {site.name} (&quot;we&quot;, &quot;us&quot;) collects and uses personal data
              when you visit <strong>{site.url.replace(/^https?:\/\//, "")}</strong>, contact us or download our
              resources. For this processing, {site.name} is the <strong>Data Fiduciary</strong> under the Digital
              Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;).
            </p>

            <h2>1. Personal data we collect and why</h2>
            <p>We collect only the personal data we need for each purpose:</p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-50 text-navy-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">When</th>
                  <th className="px-4 py-3 font-semibold">Personal data</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {dataTable.map((row) => (
                  <tr key={row.source} className="align-top">
                    <td className="px-4 py-3 font-medium text-navy-900">{row.source}</td>
                    <td className="px-4 py-3">{row.data}</td>
                    <td className="px-4 py-3">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="blog-content mt-8">
            <p>
              We do <strong>not</strong> sell your personal data, use it for profiling or automated decision-making, or
              send marketing communications unless you have asked us to.
            </p>

            <h2>2. Cookies and analytics</h2>
            <p>
              This website does not use advertising cookies, tracking pixels or third-party analytics. We do not set
              cookies to track you. If this changes, we will update this notice and ask for your consent before any
              non-essential cookies are used.
            </p>

            <h2>3. Legal basis</h2>
            <p>
              When you submit a form or message us, you voluntarily provide your personal data for a specified
              purpose — responding to your enquiry. We process it on that basis under Section 7(a) of the DPDP Act, or
              with your consent where required. You may withdraw consent at any time by emailing us; withdrawal does
              not affect processing already carried out.
            </p>

            <h2>4. Who we share it with</h2>
            <p>
              We share personal data only with service providers that help us run this website and respond to you,
              acting as our Data Processors under contract:
            </p>
            <ul>
              <li>Website hosting provider (Vercel)</li>
              {site.formEndpoint && <li>Form handling service (Formspree), which delivers form submissions to us</li>}
              {site.bookingUrl && <li>Online scheduling service, if you choose to book a call through our calendar</li>}
              <li>Our email service provider</li>
              <li>WhatsApp (Meta), only if you choose to contact us on WhatsApp</li>
            </ul>
            <p>
              We may also disclose personal data where required by law or by a lawful request from a government
              authority.
            </p>

            <h2>5. Transfers outside India</h2>
            <p>
              Some of our service providers may store or process data outside India. Such transfers are made in
              accordance with the DPDP Act and any restrictions notified by the Government of India.
            </p>

            <h2>6. How long we keep it</h2>
            <p>
              We keep enquiry and checklist data only as long as needed for the purpose it was collected. If an enquiry
              does not lead to an engagement, we delete it within 12 months of our last interaction, unless you ask us
              to delete it sooner. Client engagement records are retained as required by law and our professional
              obligations. Server logs are retained by our hosting provider for a limited period for security
              purposes.
            </p>

            <h2>7. How we protect it</h2>
            <p>
              We use reasonable security safeguards, including encrypted (HTTPS) connections, access controls and
              reputable service providers, to protect personal data against unauthorised access and breaches. If a
              personal data breach occurs, we will notify affected individuals and the Data Protection Board of India
              as required by law.
            </p>

            <h2>8. Your rights</h2>
            <p>Under the DPDP Act, you have the right to:</p>
            <ul>
              <li>Obtain a summary of the personal data we hold about you and how it is processed</li>
              <li>Correct, complete or update inaccurate or incomplete personal data</li>
              <li>Request erasure of personal data that is no longer needed</li>
              <li>Withdraw consent, where processing is based on consent</li>
              <li>Have your grievances addressed by us</li>
              <li>Nominate another person to exercise your rights in the event of death or incapacity</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href={`mailto:${grievanceOfficer.email}`}>{grievanceOfficer.email}</a>. We may need to verify your
              identity before acting on a request.
            </p>

            <h2>9. Children</h2>
            <p>
              Our website and services are intended for businesses and professionals. We do not knowingly collect
              personal data from anyone under 18. If you believe a child has provided us with personal data, please
              contact us and we will delete it.
            </p>

            <h2>10. Grievance Officer</h2>
            <p>For questions or complaints about how we handle personal data, contact our Grievance Officer:</p>
          </div>

          <div className="mt-6 rounded-2xl border border-gold-300 bg-gold-100 p-6 text-slate-800">
            <p className="font-semibold text-navy-900">Grievance Officer, {site.name}</p>
            {grievanceOfficer.name && <p className="mt-1">{grievanceOfficer.name}</p>}
            <p className="mt-1">
              Email:{" "}
              <a href={`mailto:${grievanceOfficer.email}`} className="font-medium text-navy-700 underline">
                {grievanceOfficer.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-slate-600">
              We aim to acknowledge grievances promptly and resolve them within 30 days.
            </p>
          </div>

          <div className="blog-content mt-8">
            <p>
              If you are not satisfied with our response, you may file a complaint with the{" "}
              <strong>Data Protection Board of India</strong> after first using our grievance redressal process.
            </p>

            <h2>11. Language</h2>
            <p>
              This notice is available in English. On request, we will provide it in any language listed in the Eighth
              Schedule to the Constitution of India.
            </p>

            <h2>12. Changes to this notice</h2>
            <p>
              We may update this notice from time to time. The latest version will always be available on this page
              with its &quot;last updated&quot; date.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-navy-900 p-7 text-white">
            <h2 className="font-serif text-xl text-gold-300">Need a privacy notice like this for your business?</h2>
            <p className="mt-2 text-slate-200">We draft DPDP-aligned privacy notices for websites, apps and SaaS products.</p>
            <Link href="/services#privacy-policy-drafting" className="btn-gold mt-5">
              Privacy Policy Drafting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
