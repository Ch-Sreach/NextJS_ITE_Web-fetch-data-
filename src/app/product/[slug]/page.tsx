"use client";

import { useEffect, useState } from "react";
import { productType } from "@/src/lib/product";
import { useParams } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug;

  const [product, setProduct] = useState<productType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/products`);
        const data: productType[] = await response.json();

        // find product by slug
        const foundProduct = data.find((item) => item.slug === slug);

        setProduct(foundProduct || null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Product not found
      </div>
    );
  }

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        
        {/* Product Image */}
        <div className="rounded-3xl bg-slate-100 p-6">
          <img
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title}
            className="h-[500px] w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            mySnkr
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            {product.title}
          </h1>

          <p className="text-lg leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="text-3xl font-bold text-slate-900">
            ${product.price}
          </div>

          <button className="w-fit rounded-full bg-slate-900 px-8 py-4 text-white transition hover:bg-slate-700">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}