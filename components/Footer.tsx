"use client";

import Link from "next/link";
import { Sparkles, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Globe as Facebook } from 'lucide-react';

const FOOTER_LINKS = {
  Shop: ["Electronics", "Clothing", "Home & Living", "Sports", "Beauty", "New Arrivals"],
  Support: ["Help Center", "Track Order", "Returns & Exchanges", "Shipping Info", "Contact Us"],
  Company: ["About Us", "Careers", "Press", "Sustainability", "Affiliate Program"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Lumière</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Curated premium products delivered to your door. Quality you can trust, prices you&apos;ll love.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Github className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-violet-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Lumière Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
