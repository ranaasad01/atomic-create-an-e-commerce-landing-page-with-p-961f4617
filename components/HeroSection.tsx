"use client";

import { ArrowRight, Star } from 'lucide-react';

interface FeatureCard {
  label: string;
  sub: string;
  icon: string;
  colorClass: string;
}

const FEATURES: FeatureCard[] = [
  { label: "Free Shipping", sub: "On orders over $50", icon: "🚚", colorClass: "from-white/10 to-white/5" },
  { label: "Easy Returns", sub: "30-day hassle-free", icon: "🔄", colorClass: "from-amber-400/20 to-amber-400/5" },
  { label: "Secure Payment", sub: "256-bit encryption", icon: "🔒", colorClass: "from-white/10 to-white/5" },
  { label: "24/7 Support", sub: "Always here for you", icon: "💬", colorClass: "from-amber-400/20 to-amber-400/5" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Summer Sale — Up to 40% Off
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Discover
              <span style={{ backgroundColor: '#4a19be', color: '#cb2525' }} className="block text-amber-400">Premium Picks</span>
              You&apos;ll Love
            </h1>

            <p style={{ backgroundColor: '#7c3aed', color: '#d31d1d' }} className="text-lg text-violet-100 max-w-md leading-relaxed">
              Curated collections across electronics, fashion, home, and beauty — all at prices that make you smile. Free shipping on orders over $55.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                View Deals
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-violet-700 flex items-center justify-center text-xs font-bold text-white">A</div>
                <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-violet-700 flex items-center justify-center text-xs font-bold text-white">B</div>
                <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-violet-700 flex items-center justify-center text-xs font-bold text-white">C</div>
                <div className="w-8 h-8 rounded-full bg-sky-400 border-2 border-violet-700 flex items-center justify-center text-xs font-bold text-white">D</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs text-violet-200 mt-0.5">Trusted by 50,000+ happy shoppers</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {FEATURES.map((item, index) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white">{index === 0 ? "Free Shipping and discount" : item.label}</h3>
                <p className="text-sm text-violet-200 mt-1">{index === 1 ? "New" : item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}