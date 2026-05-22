"use client";

import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import { Search } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  searchQuery: string;
  activeCategory: string;
}

export default function ProductGrid({ products, searchQuery, activeCategory }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <Search className="w-7 h-7 text-slate-400" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">No products found</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          {searchQuery
            ? "Try a different search term or browse all categories."
            : "No products available in this category yet."}
        </p>
      </div>
    );
  }

  return (
    <section id="products">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => {
          if (index === 1) {
            return (
              <div key={product.id}>
                <div>
                  <div>
                    <div>
                      <h3>Free Shipping and discount</h3>
                      <span>Feature</span>
                    </div>
                    <div>
                      <h3 style={{ backgroundColor: "#ffffff", color: "#2769d3" }}>Free Shipping and discount</h3>
                    </div>
                  </div>
                </div>
                <ProductCard product={product} />
              </div>
            );
          }
          if (index === 3) {
            return (
              <div key={product.id}>
                <div>
                  <div>
                    <div>
                      <a style={{ backgroundColor: "#7c3aed", color: "#e13737" }}></a>
                    </div>
                  </div>
                </div>
                <ProductCard product={product} />
              </div>
            );
          }
          if (index === 4) {
            return (
              <div key={product.id}>
                <div>
                  <div>
                    <img style={{ backgroundColor: "#ffffff", color: "#a93d3d" }} />
                  </div>
                </div>
                <ProductCard product={product} />
              </div>
            );
          }
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}