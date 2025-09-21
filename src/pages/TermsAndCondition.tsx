import { useNavigate } from "react-router-dom";
type Props = {
  appName?: string;
  effectiveDate?: string; // e.g. "September 21, 2025"
};

export default function TermsAndConditions({
  appName = "CHATNEST",
  effectiveDate = "September 21, 2025",
  
}: Props) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-sky-900">
      <header className="bg-sky-50 border-b border-sky-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold">
              {appName.charAt(0)}
            </div> */}
            <div>
              <h1 className="text-2xl font-semibold">{appName} — Terms & Conditions</h1>
              <p className="text-sm text-sky-600">Effective date: {effectiveDate}</p>
            </div>
          </div>
          <a
            href="#accept"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow-sm hover:bg-sky-700"
          >
            Accept & Continue
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8">
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <a href="#introduction" className="text-sky-600 hover:underline">
                Introduction
              </a>
            </li>
            <li>
              <a href="#user-conduct" className="text-sky-600 hover:underline">
                User Conduct
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-sky-600 hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#termination" className="text-sky-600 hover:underline">
                Termination
              </a>
            </li>
            <li>
              <a href="#disclaimer" className="text-sky-600 hover:underline">
                Disclaimer & Liability
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sky-600 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <article className="prose prose-sky max-w-none">
          <section id="introduction">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>{appName}</strong> ("we", "us", "our"). These Terms &
              Conditions ("Terms") govern your access to and use of our chat
              application and related services (the "Service"). By downloading,
              installing, registering for, or using the Service, you agree to be
              bound by these Terms. If you do not agree, do not use the
              Service.
            </p>
          </section>

          <section id="eligibility">
            <h3>2. Eligibility</h3>
            <p>
              You must be at least 13 years old (or older if required by local
              law) to use the Service. If you are under the age required by
              local law, do not use the Service.
            </p>
          </section>

          <section id="account">
            <h3>3. Account Registration</h3>
            <p>
              To use certain features you may be required to register for an
              account. You agree to provide accurate, complete, and up-to-date
              information when creating an account and to keep your account
              credentials secure. You are solely responsible for any activity
              that occurs under your account.
            </p>
          </section>

          <section id="user-conduct">
            <h2>4. User Conduct</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul>
              <li>Violate any law, regulation, or third-party right.</li>
              <li>Harass, threaten, or bully others.</li>
              <li>Send spam, unsolicited messages, or malware.</li>
              <li>Impersonate any person or entity or misrepresent your
                affiliation.</li>
              <li>Collect or harvest personal information about other users
                without their consent.</li>
            </ul>
            <p>
              We reserve the right (but have no obligation) to remove or block
              any content that we believe violates these Terms or is otherwise
              objectionable.
            </p>
          </section>

          <section id="content-ownership">
            <h3>5. Content Ownership & License</h3>
            <p>
              You retain ownership of the content you create and share through
              the Service. By posting content on or through the Service, you
              grant <strong>{appName}</strong> a worldwide, non-exclusive,
              royalty-free, transferable license to use, store, display, and
              distribute that content as necessary to provide the Service.
            </p>
          </section>

          <section id="privacy">
            <h2>6. Privacy</h2>
            <p>
              Our <a href="#">Privacy Policy</a> describes how we collect,
              use, and share personal information. By using the Service you
              consent to our data practices described in the Privacy Policy.
            </p>
          </section>

          <section id="third-party">
            <h3>7. Third-Party Services</h3>
            <p>
              The Service may contain links to third-party websites, services,
              or integrations. We are not responsible for the content or
              practices of third parties. Your use of third-party services is
              at your own risk and subject to the third party's terms.
            </p>
          </section>

          <section id="fees">
            <h3>8. Fees & Payments</h3>
            <p>
              Some features may be offered for a fee. If you purchase any
              paid features, you agree to the pricing and payment terms in
              effect at the time of purchase. All fees are non-refundable
              except as required by law.
            </p>
          </section>

          <section id="termination">
            <h2>9. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any
              time for conduct we believe violates these Terms or for any other
              reason. You may close your account at any time by following the
              account deletion steps in the app. Termination does not relieve
              you of obligations that accrued prior to termination.
            </p>
          </section>

          <section id="disclaimer">
            <h2>10. Disclaimer of Warranties & Liability</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW,
              <strong>{appName}</strong> DISCLAIMS ALL WARRANTIES, WHETHER
              EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              IN NO EVENT WILL <strong>{appName}</strong> BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
              OUR AGGREGATE LIABILITY FOR DIRECT DAMAGES IS LIMITED TO THE
              AMOUNT YOU PAID US IN THE LAST 12 MONTHS, OR $100, WHICHEVER IS
              GREATER.
            </p>
          </section>

          <section id="indemnity">
            <h3>11. Indemnity</h3>
            <p>
              You agree to indemnify and hold harmless <strong>{appName}</strong>
              and its officers, directors, employees, and agents from any
              claims, liabilities, damages, losses, and expenses arising out
              of your violation of these Terms or your use of the Service.
            </p>
          </section>

          <section id="changes">
            <h2>12. Changes to Terms</h2>
            <p>
              We may modify these Terms from time to time. If we make
              material changes, we will provide notice through the Service or
              via email. Your continued use of the Service after the
              effective date of changes constitutes acceptance of the updated
              Terms.
            </p>
          </section>

          <section id="governing-law">
            <h3>13. Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the jurisdiction where <strong>{appName}</strong> is
              incorporated, without regard to conflicts of law principles.
            </p>
          </section>

          <section id="dispute-resolution">
            <h3>14. Dispute Resolution</h3>
            <p>
              Any dispute arising from these Terms shall first be attempted to
              be resolved through good-faith negotiation. If unresolved, the
              dispute may be resolved through binding arbitration, except
              where prohibited by law.
            </p>
          </section>

          <section id="misc">
            <h3>15. Miscellaneous</h3>
            <ul>
              <li>These Terms constitute the entire agreement between you and us.</li>
              <li>If any provision is held invalid, the remaining provisions remain in effect.</li>
              <li>Failure to enforce any right does not constitute a waiver.</li>
            </ul>
          </section>

          <section id="contact">
            <h2>16. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at
              <a href="mailto:support@yourchatapp.com"> support@yourchatapp.com</a>.
            </p>
          </section>

          <footer className="mt-10">
            <div className="flex items-center justify-between border-t border-sky-100 pt-6">
              <div className="text-sm text-sky-600">© {new Date().getFullYear()} {appName}. All rights reserved.</div>
                <button
                id="accept" className="inline-flex items-center px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow-sm hover:bg-sky-700"
                onClick={() => {
                  navigate("/login")
                }}
                >
                  I Accept
                </button>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
