import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf, Shield, TrendingUp } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Navbar */}
      <nav className="border-b bg-white/80 backdrop-blur-md dark:bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-green-700">PoultryGuard</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/login?demo=true">
              <Button className="bg-green-600 hover:bg-green-700">Demo Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-950 text-green-700 px-4 py-1 rounded-full text-sm mb-6">
          Tamil Nadu • Broiler Biosecurity
        </div>
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Protect Your Flock.<br />Secure Your Farm.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Real-time biosecurity monitoring, medicine tracking, and early disease detection for broiler farms in Tamil Nadu.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/login">
            <Button size="lg" className="bg-green-600 text-lg px-10">Get Started Free</Button>
          </Link>
          <Button size="lg" variant="outline">Watch 2-min Demo</Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Biosecurity First</h3>
            <p>Digital check-in, movement logs, and daily checklists prevent cross-contamination.</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Actionable Insights</h3>
            <p>Live mortality trends, FCR tracking, and AI-assisted risk prediction.</p>
          </div>
          {/* More cards */}
        </div>
      </section>

      {/* Tamil Nadu Context */}
      <section className="py-20 bg-green-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-green-700 dark:text-green-400">
            Built for Tamil Nadu's growing broiler industry. Supports Tamil language interface and local veterinary guidelines.
          </p>
        </div>
      </section>
    </div>
  );
}
