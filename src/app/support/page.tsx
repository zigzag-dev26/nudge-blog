import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support — Nudge Cleaning App',
  description:
    'Get help with Nudge, the AI cleaning coach for ADHD. Contact us by email or browse common questions.',
  alternates: { canonical: 'https://nudgeclean.app/support' },
};

const FAQ = [
  {
    q: 'How do I cancel my subscription?',
    a: 'Open the App Store on your iPhone → tap your profile photo → Subscriptions → Nudge → Cancel. Cancellation takes effect at the end of your current billing period.',
  },
  {
    q: 'I was charged but never got a free trial. Can I get a refund?',
    a: 'Apple handles all billing. For refunds, visit reportaproblem.apple.com and select the Nudge charge. If you run into trouble, email us and we\'ll help sort it out.',
  },
  {
    q: 'The AI plan doesn\'t feel right for my energy level. What can I do?',
    a: 'Try adjusting your energy slider and available time before generating — even a one-point change shifts the plan significantly. You can also tap any task to swap it for something smaller.',
  },
  {
    q: 'Scan My Mess isn\'t working. What should I check?',
    a: 'Make sure Nudge has camera permission in Settings → Privacy & Security → Camera. Good lighting helps too — the AI reads the room better in natural light.',
  },
  {
    q: 'Will my cleaning data be used to train AI models?',
    a: 'No. Your data is never used to train AI models. Camera images are processed in real time and not stored. See our Privacy Policy for full details.',
  },
  {
    q: 'Is Nudge available on Android?',
    a: 'Not yet — iOS only for now. Android is on the roadmap. Email us to join the waitlist and we\'ll let you know when it\'s ready.',
  },
  {
    q: 'I forgot my password / can\'t log in.',
    a: 'Tap "Forgot password?" on the login screen. If you signed up with Apple or Google, use that same method to sign in — there\'s no separate password.',
  },
];

export default function Support() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#87A878] mb-2">Support</h1>
      <p className="text-gray-500 text-sm mb-8">We're here to help — no guilt, no nags.</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
        <p className="text-gray-600 mb-2">
          Email us at{' '}
          <a
            href="mailto:support@nudgeclean.app"
            className="text-[#87A878] hover:underline font-medium"
          >
            support@nudgeclean.app
          </a>
        </p>
        <p className="text-gray-500 text-sm">
          We reply within 1–2 business days. Include your device model and iOS version if you're
          reporting a bug — it helps a lot.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQ.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold text-gray-800 mb-1">{q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <nav className="pt-6 border-t border-gray-100 flex gap-6 text-sm flex-wrap">
        <Link href="/" className="text-[#87A878] hover:underline">Home</Link>
        <Link href="/about" className="text-[#87A878] hover:underline">About</Link>
        <Link href="/privacy" className="text-[#87A878] hover:underline">Privacy</Link>
        <Link href="/terms" className="text-[#87A878] hover:underline">Terms</Link>
      </nav>
    </div>
  );
}
