"use client";

import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/mock-data";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = result.filter((p) => p.badge === "new").concat(result.filter((p) => p.badge !== "new"));
        break;
      default:
        result = result.filter((p) => p.badge === "featured" || p.badge === "bestseller").concat(
          result.filter((p) => p.badge !== "featured" && p.badge !== "bestseller")
        );
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  const featuredProducts = PRODUCTS.filter((p) => p.badge === "bestseller" || p.badge === "featured");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main>
        <HeroSection />

        {/* Featured Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Free Shipping", sub: "Orders over $50", bg: "bg-violet-50", text: "text-violet-700", icon: "🚚" },
              { label: "Summer Sale", sub: "Up to 40% off", bg: "bg-amber-50", text: "text-amber-700", icon: "☀️" },
              { label: "New Arrivals", sub: "Fresh this week", bg: "bg-emerald-50", text: "text-emerald-700", icon: "✨" },
              { label: "Top Rated", sub: "4.5+ star picks", bg: "bg-rose-50", text: "text-rose-700", icon: "⭐" },
            ].map((item) => (
              <div key={item.label} className={"rounded-2xl p-4 flex items-center gap-3 " + item.bg}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className={"text-sm font-bold " + item.text}>{item.label}</p>
                  <p className="text-xs text-slate-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Products</h2>
              <p className="text-slate-500 text-sm mt-1">Curated collections across electronics, fashion, home, and beauty — all at prices that make you smile. Free shipping on orders over $55.</p>
            </div>

            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          </div>

          <ProductGrid
            products={filteredProducts}
            searchQuery={searchQuery}
            activeCategory={activeCategory}
          />
        </section>

        {/* Bestsellers Banner */}
        {featuredProducts.length > 0 && !searchQuery && activeCategory === "All" && (
          <section className="bg-white border-y border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Bestsellers &amp; Featured</h2>
                  <p className="text-slate-500 text-sm mt-1">Our most loved products, hand-picked for you</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredProducts.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}