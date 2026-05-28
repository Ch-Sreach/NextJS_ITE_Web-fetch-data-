"use client";
import { useEffect, useState } from "react";
import { productType } from "@/src/lib/product";
import ProductCardComponent from "@/src/components/product/product-card";

type productData = productType[];
// base url
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ProductPage() {
  const [products, setProduct] = useState<productData>();

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${BASE_URL}/api/v1/products`);
      const data = await response.json();
      setProduct(data);
    }
    getData();
  }, []);

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">mySnkr</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">2022 Collection</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            Explore the latest sneaker drops with premium details, elevated comfort, and bold style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products?.map((product) => (
            <ProductCardComponent
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              slug={product.slug}
              images={product.images}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
