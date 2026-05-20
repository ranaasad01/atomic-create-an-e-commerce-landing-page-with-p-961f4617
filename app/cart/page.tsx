"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft, Sparkles } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/mock-data";
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
  const { items, itemCount } = useCart();

  const suggestedProducts = PRODUCTS.filter(
    (p) => !items.find((i) => i.product.id === p.id) && (p.badge === "bestseller" || p.badge === "featured")
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Simple header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Lumière</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-violet-600" />
            Your Cart
            {itemCount > 0 && (
              <span className="text-lg font-semibold text-slate-400">({itemCount} item{itemCount !== 1 ? "s" : ""})</span>
            )}
          </h1>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-violet-300" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Your cart is empty</h2>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Looks like you haven&apos;t added anything yet. Explore our curated collection and find something you love.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5"
            >
              Start Shopping
            </Link>

            {/* Suggested products */}
            {suggestedProducts.length > 0 && (
              <div className="mt-16 w-full max-w-5xl">
                <h3 className="text-xl font-extrabold text-slate-900 mb-6 text-left">You might like</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {suggestedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-slate-800">Items in your cart</h2>
              </div>
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}

              {/* Promo code */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                <p className="text-sm font-bold text-slate-800 mb-3">Have a promo code?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code (e.g. SUMMER20)"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2.5 bg-slate-900 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors duration-200">
                    Apply
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "🔒", label: "Secure Checkout", sub: "SSL encrypted" },
                  { icon: "🚚", label: "Fast Delivery", sub: "2-5 business days" },
                  { icon: "🔄", label: "Easy Returns", sub: "30-day policy" },
                ].map((badge) => (
                  <div key={badge.label} className="bg-white rounded-xl border border-slate-100 p-3 text-center">
                    <div className="text-xl mb-1">{badge.icon}</div>
                    <p className="text-xs font-bold text-slate-800">{badge.label}</p>
                    <p className="text-xs text-slate-400">{badge.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}

        {/* You might also like */}
        {items.length > 0 && suggestedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {suggestedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
