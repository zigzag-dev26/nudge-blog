import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Nudge — AI Cleaning Coach for ADHD',
  description:
    'Nudge is an AI cleaning coach built for people with ADHD and executive dysfunction. Learn what it does, how the AI works, and who built it.',
  alternates: { canonical: 'https://nudgeclean.app/about' },
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#87A878] mb-2">About Nudge</h1>
      <p className="text-gray-500 text-sm mb-8">The cleaning app that nudges, never nags.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">What Nudge Does</h2>
        <p className="text-gray-600 mb-3">
          Nudge is an AI-powered cleaning coach for iOS. You tell it your energy level (1–5) and
          how much time you have. It gives you a cleaning plan that actually fits how you feel right now —
          not how you felt when you set up a schedule last month.
        </p>
        <p className="text-gray-600">
          For people with ADHD, executive dysfunction, or anyone who gets overwhelmed by cleaning,
          Nudge removes two of the hardest parts: deciding what to do and breaking it into steps small
          enough to actually start.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Who Built It</h2>
        <p className="text-gray-600">
          Nudge is built by an indie developer who understands firsthand what it's like to have
          executive dysfunction and stand in the doorway of a messy room not knowing where to begin.
          No VC funding, no team of fifty. Just a tool built because nothing else existed that
          combined genuine AI capability with genuine empathy for how ADHD brains work.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Why It Exists</h2>
        <p className="text-gray-600 mb-3">
          Every cleaning app on the market was built for neurotypical consistency. Sweepy sends
          "overdue" notifications. Tody has a color-coded point system. Generic to-do apps expect
          you to maintain a rigid routine.
        </p>
        <p className="text-gray-600">
          Nudge was built on a different assumption: your capacity varies. Some days you have an hour.
          Some days you have five minutes and low energy. The app should adapt to you — not the other
          way around. Your home doesn't need to be perfect, just livable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">How the AI Works</h2>
        <p className="text-gray-600 mb-3">
          Nudge uses Claude (Anthropic's AI model) for two things:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>
            <strong>Daily plan generation</strong> — based on your stated energy level and time,
            the AI selects and sequences cleaning tasks appropriate to your capacity.
          </li>
          <li>
            <strong>Room scanning</strong> — point your camera at any room. The AI analyzes the
            image and produces a prioritized task list based on what it sees, ordered by visual
            impact and effort required.
          </li>
          <li>
            <strong>Task decomposition</strong> — say "clean the kitchen" and the AI breaks it
            into 5 concrete micro-steps you can actually check off.
          </li>
        </ol>
        <p className="text-gray-600 mt-3">
          No user data is used to train AI models. Camera images are processed in real time and
          not stored.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
        <ul className="space-y-2 text-gray-600">
          {[
            ['AI Daily Plans', 'Energy-based cleaning plans that adapt to your capacity each day'],
            ['Panic Button', 'One micro-task under 2 minutes to break the freeze when you can\'t start'],
            ['Panic Clean Mode', 'Speed-clean list for when guests arrive in 20 minutes'],
            ['Scan My Mess', 'Point camera at room, AI tells you where to start'],
            ['Task Decomposition', 'Breaks any big task into 5 checkable micro-steps'],
            ['Momentum Score', 'Tracks showing up, not perfection — "4 of 7 days" is a win'],
            ['Weekly AI Reports', 'Pattern insights like "you clean best on Tuesday mornings"'],
          ].map(([name, desc]) => (
            <li key={name} className="flex gap-2">
              <span className="text-[#87A878] font-medium min-w-fit">{name}:</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Pricing</h2>
        <ul className="space-y-1 text-gray-600">
          <li>Monthly: <strong>$6.99/month</strong></li>
          <li>Annual: <strong>$49.99/year</strong> (save 40%)</li>
          <li>Free trial: <strong>7 days</strong>, no credit card required</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Platform</h2>
        <p className="text-gray-600">iOS (iPhone and iPad). Available on the App Store.</p>
        <p className="text-gray-600 mt-1">Website: <a href="https://nudgeclean.app" className="text-[#87A878] hover:underline">nudgeclean.app</a></p>
        <p className="text-gray-600 mt-1">Support: <a href="mailto:support@nudgeclean.app" className="text-[#87A878] hover:underline">support@nudgeclean.app</a></p>
      </section>

      <nav className="pt-6 border-t border-gray-100 flex gap-6 text-sm flex-wrap">
        <Link href="/" className="text-[#87A878] hover:underline">Home</Link>
        <Link href="/blog" className="text-[#87A878] hover:underline">Blog</Link>
        <Link href="/privacy" className="text-[#87A878] hover:underline">Privacy</Link>
        <Link href="/terms" className="text-[#87A878] hover:underline">Terms</Link>
      </nav>
    </div>
  );
}
