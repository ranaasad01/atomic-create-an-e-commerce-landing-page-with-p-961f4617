"use client";

import { useCart } from "@/context/CartContext";
import { ArrowRight, Tag } from 'lucide-react';
import Link from "next/link";

export default function OrderSummary() {
  const { items, subtotal, clearCart } = useCart();

  const originalTotal = items.reduce((sum, item) => {
    const orig = item.product.originalPrice ?? item.product.price;
    return sum + orig * item.quantity;
  }, 0);

  const savings = originalTotal - subtotal;
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-extrabold text-slate-900 mb-5">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
          <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
        </div>

        {savings > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              You save
            </span>
            <span className="font-semibold">-${savings.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-semibold text-emerald-600">Free</span>
          ) : (
            <span className="font-semibold text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
        </div>

        {shipping > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700 font-medium">
            Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
          </div>
        )}

        <div className="border-t border-slate-100 pt-3 flex justify-between">
          <span className="font-extrabold text-slate-900 text-base">Total</span>
          <span className="font-extrabold text-slate-900 text-base">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full mt-5 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5">
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <Link
        href="/"
        className="w-full mt-3 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
      >
        Continue Shopping
      </Link>

      <button
        onClick={clearCart}
        className="w-full mt-2 text-xs text-slate-400 hover:text-rose-500 transition-colors duration-200 py-1"
      >
        Clear cart
      </button>
    </div>
  );
}
