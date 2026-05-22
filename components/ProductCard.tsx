"use client";

import { useState } from "react";
import { ShoppingCart, Heart } from 'lucide-react';

import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
  cardIndex?: number;
}

const BADGE_STYLES: Record<string, string> = {
  bestseller: "bg-amber-400 text-slate-900",
  new: "bg-emerald-500 text-white",
  sale: "bg-rose-500 text-white",
  featured: "bg-violet-600 text-white",
};

const BADGE_LABELS: Record<string, string> = {
  bestseller: "Bestseller",
  new: "New",
  sale: "Sale",
  featured: "Featured",
};

export default function ProductCard({ product, cardIndex }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // cardIndex is 1-based; target is 3rd card (index 2), content block child 2 (index 1), first div (index 0), second child (index 1), first span (index 0)
  const isTargetCard = cardIndex === 3;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          {...(isTargetCard ? { style: { backgroundColor: "#ffffff", color: "#a93d3d" } } : {})}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={"text-xs font-bold px-2.5 py-1 rounded-full " + BADGE_STYLES[product.badge]}>
              {BADGE_LABELS[product.badge]}
            </span>
          )}
          {discount > 0 && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500 text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
        >
          <Heart
            className={"w-4 h-4 transition-colors " + (wishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400")}
          />
        </button>

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex-1">
          <p className="text-xs text-violet-600 font-semibold uppercase tracking-wide mb-1">{product.category}</p>
          <h3
            className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-violet-700 transition-colors"
            style={{ backgroundColor: "#ffffff", color: "#2769d3" }}
          >
            {isTargetCard ? "Free Shipping and discount" : product.name}
          </h3>
        </div>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900">{isTargetCard ? "Feature" : `$${product.price.toFixed(2)}`}</span>
            {!isTargetCard && product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            {isTargetCard && product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          style={isTargetCard ? { backgroundColor: "#7c3aed", color: "#e13737" } : undefined}
          className={
            "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 " +
            (added
              ? "bg-emerald-500 text-white"
              : product.inStock
              ? "bg-violet-600 hover:bg-violet-700 text-white hover:shadow-md hover:shadow-violet-200"
              : "bg-slate-100 text-slate-400 cursor-not-allowed")
          }
        >
          <ShoppingCart className="w-4 h-4" />
          {added ? "Added!" : product.inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}