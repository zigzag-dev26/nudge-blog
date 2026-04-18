import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Nudge',
  description: 'Privacy policy for the Nudge AI cleaning coach app.',
  alternates: { canonical: 'https://nudgeclean.app/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 14, 2026</p>

      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg px-5 py-4 mb-10">
        <p className="text-gray-700 m-0">The short version: we collect only what we need to run the app, we never sell your data, and you can delete your account and all associated data at any time.</p>
      </div>

      <div className="prose">
        <h2>1. Who We Are</h2>
        <p>Nudge (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is an AI-powered cleaning coach app designed for people who find starting tasks difficult. Our app is operated as an independent product. If you have questions about this policy, contact us at <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a>.</p>

        <h2>2. Data We Collect</h2>

        <h3>2.1 Account Data</h3>
        <p>When you create an account, we collect:</p>
        <ul>
          <li><strong>Email address</strong> — used for authentication and account recovery</li>
          <li><strong>Sign-in method</strong> — email/password or Apple Sign In</li>
        </ul>
        <p>We do not collect your name, phone number, or any government ID.</p>

        <h3>2.2 Cleaning &amp; Task Data</h3>
        <p>To power the AI coaching features, we store:</p>
        <ul>
          <li>Room names and types you create (e.g., &ldquo;Kitchen&rdquo;, &ldquo;Bedroom&rdquo;)</li>
          <li>Cleaning tasks and their completion status</li>
          <li>AI-generated cleaning plans associated with your sessions</li>
          <li>Session history (which tasks you completed and when)</li>
        </ul>

        <h3>2.3 Mood and Energy Data</h3>
        <p>Before each cleaning session, the app optionally asks for your current energy level (1–5 scale) and available time. This is used solely to personalise the AI&apos;s cleaning plan for that session. It is stored with your session record and is never sold or shared with third parties.</p>

        <h3>2.4 Room Photos (Scan Room Feature)</h3>
        <p>If you use the &ldquo;Scan Room&rdquo; feature, you may optionally submit a photo of your room. This photo is:</p>
        <ul>
          <li>Sent to our AI service (Claude by Anthropic) for analysis to generate a cleaning plan</li>
          <li>Not permanently stored on our servers after the plan is generated</li>
          <li>Never used for training AI models</li>
          <li>Never shared with third parties for any purpose other than generating your cleaning plan</li>
        </ul>
        <p>Use of this feature is entirely optional.</p>

        <h3>2.5 Subscription &amp; Purchase Data</h3>
        <p>Subscription management is handled by <strong>RevenueCat</strong>. We receive a subscriber identifier and subscription status (free/trial/premium). We do not process or store your payment card details — these are handled entirely by Apple (App Store) or Google (Play Store).</p>

        <h3>2.6 Notification Preferences</h3>
        <p>If you enable push notifications, we store your notification time preference and frequency setting. Actual push delivery is handled by Apple&apos;s APNs or Google&apos;s FCM services.</p>

        <h3>2.7 Device &amp; Usage Data</h3>
        <p>We use <strong>PostHog</strong> (analytics) and <strong>Sentry</strong> (error tracking) to understand how the app is used and to fix crashes. These collect anonymised usage events and crash reports. No personally identifiable information is attached to analytics events.</p>

        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To provide, personalise, and improve the Nudge app</li>
          <li>To generate AI-powered cleaning plans tailored to your energy and preferences</li>
          <li>To send you optional cleaning reminders (only if you enable notifications)</li>
          <li>To manage your subscription and premium access</li>
          <li>To diagnose crashes and fix bugs</li>
          <li>To understand aggregate usage patterns and improve the product</li>
        </ul>
        <p>We do <strong>not</strong> use your data for advertising, we do not sell your data to third parties, and we do not build advertising profiles.</p>

        <h2>4. Third-Party Services</h2>
        <p>We share limited data with the following services, each of which has its own privacy policy:</p>
        <ul>
          <li><strong>Supabase</strong> — database and authentication hosting (supabase.com)</li>
          <li><strong>Anthropic (Claude)</strong> — AI plan generation; processes your room descriptions and optional photos (anthropic.com)</li>
          <li><strong>RevenueCat</strong> — subscription management (revenuecat.com)</li>
          <li><strong>Apple / Google</strong> — payment processing and push notifications</li>
          <li><strong>PostHog</strong> — anonymised product analytics (posthog.com)</li>
          <li><strong>Sentry</strong> — crash reporting (sentry.io)</li>
          <li><strong>Expo</strong> — app build and over-the-air updates (expo.dev)</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>We retain your data for as long as your account is active. If you delete your account:</p>
        <ul>
          <li>All your rooms, tasks, and session history are permanently deleted</li>
          <li>Your email address and authentication record are removed</li>
          <li>Anonymised aggregate analytics data (with no link to your identity) may be retained</li>
        </ul>
        <p>You can request account deletion by emailing <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a> or via the Settings screen in the app.</p>

        <h2>6. Children&apos;s Privacy</h2>
        <p>Nudge is not directed at children under 13 (or 16 in the EU). We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</p>

        <h2>7. Your Rights</h2>
        <p>Depending on where you live, you may have rights including:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the data we hold about you</li>
          <li><strong>Correction</strong> — request correction of inaccurate data</li>
          <li><strong>Deletion</strong> — request deletion of your account and data</li>
          <li><strong>Portability</strong> — request an export of your data in a machine-readable format</li>
          <li><strong>Opt-out of analytics</strong> — you can disable analytics by turning off the relevant toggle in Settings</li>
        </ul>
        <p>To exercise any of these rights, email <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a>.</p>

        <h2>8. Security</h2>
        <p>We use industry-standard security measures including TLS encryption for all data in transit, row-level security in our database (Supabase RLS), and secure token storage on your device. No method of transmission over the internet is 100% secure, but we take reasonable steps to protect your information.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this policy occasionally. If we make material changes, we will notify you via email or an in-app notice before the changes take effect. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision.</p>

        <h2>10. Contact</h2>
        <p>Questions or concerns? Email us at <a href="mailto:support@nudgeclean.app">support@nudgeclean.app</a>.</p>
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
