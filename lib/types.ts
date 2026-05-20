export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: "bestseller" | "new" | "sale" | "featured";
  description: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
