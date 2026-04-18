import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Nudge',
  description: 'Terms of service for the Nudge AI cleaning coach app.',
  alternates: { canonical: 'https://nudgeclean.app/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 14, 2026</p>

      <div className="prose">
        <p>Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the Nudge mobile application (&ldquo;Service&rdquo;). By downloading or using Nudge, you agree to be bound by these Terms.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Nudge, you confirm that you are at least 13 years old (16 in the EU) and have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.</p>

        <h2>2. Description of Service</h2>
        <p>Nudge is an AI-powered cleaning coach application that helps users manage household tasks. The Service includes:</p>
        <ul>
          <li>Room and task management tools</li>
          <li>AI-generated personalised cleaning plans</li>
          <li>Session timers and progress tracking</li>
          <li>Panic/emergency cleaning assistance</li>
          <li>Room scanning via photos (optional)</li>
          <li>Push notification reminders</li>
          <li>Shareable progress cards</li>
        </ul>

        <h2>3. Accounts</h2>
        <p>You must create an account to use Nudge. You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your login credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Providing accurate and current account information</li>
        </ul>
        <p>Notify us immediately at <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a> if you suspect unauthorised access to your account.</p>

        <h2>4. Subscriptions and Payments</h2>

        <h3>4.1 Free and Premium Plans</h3>
        <p>Nudge offers a free tier with limited features and a premium subscription (&ldquo;Nudge Premium&rdquo;) with full access. Pricing is displayed in the app and subject to change with notice.</p>

        <h3>4.2 Free Trial</h3>
        <p>We may offer a free trial period for Nudge Premium. Your payment method will be charged at the end of the trial unless you cancel before the trial ends.</p>

        <h3>4.3 Billing</h3>
        <p>Subscriptions are billed through the App Store (Apple) or Google Play Store (Google) on a recurring basis. By subscribing, you authorise the relevant platform to charge your payment method on the applicable billing cycle.</p>

        <h3>4.4 Cancellation and Refunds</h3>
        <p>You can cancel your subscription at any time through your App Store or Google Play account settings. Cancellation takes effect at the end of the current billing period — you retain access until then. Refunds are subject to the refund policies of Apple or Google.</p>

        <h3>4.5 Price Changes</h3>
        <p>We reserve the right to change subscription prices. We will give you reasonable advance notice of any price increase, and if you do not cancel before the change takes effect, you will be charged the new price.</p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
          <li>Attempt to gain unauthorised access to any portion of the Service or any related systems</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
          <li>Upload content that is illegal, harmful, or violates the rights of others</li>
          <li>Use automated tools to scrape, crawl, or extract data from the Service</li>
          <li>Resell or sublicense your access to the Service</li>
        </ul>

        <h2>6. AI-Generated Content</h2>
        <p>Nudge uses artificial intelligence to generate personalised cleaning suggestions and plans. You acknowledge that:</p>
        <ul>
          <li>AI-generated plans are suggestions, not medical or professional advice</li>
          <li>The accuracy and suitability of AI output is not guaranteed</li>
          <li>You are responsible for evaluating and acting on AI suggestions at your own discretion</li>
          <li>We are not liable for any outcomes resulting from following AI-generated plans</li>
        </ul>

        <h2>7. User Content</h2>
        <p>Content you create within Nudge (room names, tasks, photos submitted for scanning) remains yours. By using the Service, you grant us a limited licence to process and store this content solely as needed to provide the Service. We will not use your content for training AI models without your explicit consent.</p>

        <h2>8. Intellectual Property</h2>
        <p>The Nudge app, including its design, code, branding, and all content we create, is owned by us and protected by intellectual property laws. These Terms do not grant you any rights to our intellectual property other than the limited right to use the Service as described herein.</p>

        <h2>9. Disclaimers</h2>
        <p>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

        <h2>10. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.</p>

        <h2>11. Indemnification</h2>
        <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses (including reasonable attorney&apos;s fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.</p>

        <h2>12. Termination</h2>
        <p>We may suspend or terminate your account at any time if you violate these Terms or if we discontinue the Service. You may close your account at any time by contacting <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a> or using the Settings screen. Upon termination, your data will be deleted in accordance with our Privacy Policy.</p>

        <h2>13. Changes to Terms</h2>
        <p>We may update these Terms from time to time. We will notify you of material changes via email or in-app notice at least 14 days before they take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>

        <h2>14. Governing Law</h2>
        <p>These Terms are governed by the laws of the jurisdiction in which we are established, without regard to conflict-of-law provisions. Any disputes shall be resolved in the courts of that jurisdiction, unless applicable consumer protection laws require otherwise.</p>

        <h2>15. Contact</h2>
        <p>Questions about these Terms? Email us at <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a>.</p>
      </div>

      <footer className="mt-16 pt-6 border-t border-gray-200 text-sm text-gray-400">
        <p>
          <Link href="/" className="hover:underline">Nudge</Link>
          {' · '}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          {' · '}
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          {' · '}
          <a href="mailto:support@nudgeclean.app" className="hover:underline">Contact</a>
        </p>
      </footer>
    </div>
  );
}
