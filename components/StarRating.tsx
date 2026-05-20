"use client";

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function StarRating({ rating, reviewCount, size = "sm" }: StarRatingProps) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {stars.map((star) => {
          const filled = star <= Math.floor(rating);
          const partial = !filled && star === Math.ceil(rating) && rating % 1 !== 0;
          const pct = (rating % 1) * 100;
          return (
            <span key={star} className="relative inline-block">
              <Star className={starSize + " text-slate-200 fill-slate-200"} />
              {(filled || partial) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? "100%" : pct + "%" }}
                >
                  <Star className={starSize + " text-amber-400 fill-amber-400"} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-xs font-semibold text-slate-700">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-400">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
