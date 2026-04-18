import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nudge — AI Cleaning Coach for ADHD',
  description:
    'Nudge is an AI cleaning coach for people with ADHD and executive dysfunction. Personalized plans, micro-tasks, and zero guilt. Even 5 minutes counts.',
  alternates: { canonical: 'https://nudgeclean.app' },
};

const faqs = [
  {
    q: "What's a good cleaning app for someone with ADHD?",
    a: "Nudge was built specifically for ADHD brains. It never says \"overdue\" or \"you missed a day.\" Each day starts fresh with an energy-based plan that adapts to how you feel right now — not how you felt when you made a schedule two weeks ago.",
  },
  {
    q: 'Is there an app that makes cleaning less overwhelming?',
    a: "Yes. Nudge gives you one task at a time, breaks big jobs into micro-steps, and adjusts to your energy level. You don't need to do everything — even one thing counts.",
  },
  {
    q: 'What app helps with task initiation for cleaning?',
    a: "Nudge's Panic Button is built exactly for this. When you can't start, press it and get exactly one task under 2 minutes. Just one. The goal is to break the freeze.",
  },
  {
    q: 'How do I clean my house when exhausted?',
    a: 'Set your energy to 1 in Nudge. It will give you 1–2 tasks that take under 10 minutes total. "Clean the living room" becomes "pick up 5 things off the floor." That\'s it. You showed up. That matters.',
  },
  {
    q: "What's an app that doesn't guilt-trip you about cleaning?",
    a: 'Nudge never uses words like "overdue," "you\'re behind," or "you missed a day." The language is warm and supportive — like a friend who also struggles with cleaning.',
  },
  {
    q: 'Can AI help me figure out where to start cleaning?',
    a: 'Yes — Nudge\'s "Scan My Mess" feature lets you point your camera at any room and the AI tells you exactly where to start. No more standing frozen in the doorway.',
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-[#87A878] tracking-tight leading-tight">
          The AI Cleaning Coach for ADHD Brains
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Personalized cleaning plans based on your energy level. One micro-task at a time.
          Zero guilt, zero "overdue." Even 5 minutes counts.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="https://apps.apple.com/app/nudge-ai-cleaning-coach"
            className="bg-[#87A878] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6d8f60] transition-colors"
          >
            Download on iOS
          </a>
          <Link
            href="/about"
            className="border border-[#87A878] text-[#87A878] px-6 py-3 rounded-lg font-medium hover:bg-[#87A87810] transition-colors"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* ADHD Section */}
      <section className="py-10 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Built for ADHD and Executive Dysfunction</h2>
        <p className="text-gray-600 mb-4">
          If you've tried every cleaning app and still can't get started, you're not broken —
          you're just using tools that weren't designed for how your brain works.
        </p>
        <p className="text-gray-600 mb-4">
          Nudge was built around <strong>task initiation</strong>, <strong>overwhelm</strong>, and the reality that
          cleaning motivation is not consistent. It adapts to your actual capacity today — not the idealized
          version of you that exists in a rigid weekly schedule.
        </p>
        <ul className="mt-6 space-y-3 text-gray-600">
          {[
            'AI Daily Plans — tell the app your energy (1–5) and available time, get a plan that fits',
            'Panic Button — frozen and can\'t start? Get ONE task under 2 minutes',
            'Panic Clean Mode — guests in 20 minutes? Speed-clean list by visual impact',
            'AI Task Decomposition — "clean the kitchen" becomes 5 checkable micro-steps',
            'Scan My Mess — point camera at room, AI tells you where to start',
            'Momentum Score — tracks showing up, not perfection',
          ].map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-[#87A878] mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold text-gray-800 mb-1">{q}</h3>
              <p className="text-gray-600 text-[15px]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer links */}
      <section className="pt-10 border-t border-gray-100">
        <nav className="flex gap-6 flex-wrap text-[15px]">
          <Link href="/about" className="text-[#87A878] border-b border-[#87A87840] pb-0.5 hover:border-[#87A878]">About</Link>
          <Link href="/blog" className="text-[#87A878] border-b border-[#87A87840] pb-0.5 hover:border-[#87A878]">Blog</Link>
          <Link href="/privacy" className="text-[#87A878] border-b border-[#87A87840] pb-0.5 hover:border-[#87A878]">Privacy Policy</Link>
          <Link href="/terms" className="text-[#87A878] border-b border-[#87A87840] pb-0.5 hover:border-[#87A878]">Terms of Service</Link>
          <a href="mailto:support@nudgeclean.app" className="text-[#87A878] border-b border-[#87A87840] pb-0.5 hover:border-[#87A878]">Contact</a>
        </nav>
      </section>
    </div>
  );
}
