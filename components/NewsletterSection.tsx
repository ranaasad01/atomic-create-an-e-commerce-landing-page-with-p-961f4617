"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-gradient-to-br from-violet-600 to-indigo-700 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Get Exclusive Deals First
        </h2>
        <p className="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
          Join 50,000+ subscribers and be the first to know about flash sales, new arrivals, and members-only discounts.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white font-semibold">
            <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            You&apos;re in! Check your inbox for a welcome gift.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent text-sm backdrop-blur-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-violet-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
