"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50">
        <img
          src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/961f4617-69d7-4026-9ac7-678a57d7cc65/images/uploaded-1779457303549-wbyv2a.png"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs text-violet-600 font-semibold uppercase tracking-wide mb-0.5">{product.category}</p>
            <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">{product.name}</h3>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="flex-shrink-0 p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 bg-slate-50 rounded-xl border border-slate-200 p-1">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all duration-150 text-slate-600"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-bold text-slate-900">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all duration-150 text-slate-600"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-right">
            <p className="text-base font-extrabold text-slate-900">
              ${(product.price * quantity).toFixed(2)}
            </p>
            {discount > 0 && (
              <p className="text-xs text-slate-400 line-through">
                ${(product.originalPrice! * quantity).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
