import { productType } from "@/src/lib/product";
import Link from "next/link";

export default function ProductCardComponent({
  title = "Product",
  description = "Premium sneaker with bold styling.",
  slug = "",
  images = [],
  price = 0,
}: productType) {
  const heroImage = images?.[0] ?? "/placeholder.png";
  const brand = description?.split(" ")[0] ?? "Brand";

  return (
    <Link href={`/product/${slug}`} className="group block">
      <article className="h-full overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.16)]">
        <div className="relative overflow-hidden bg-slate-50 p-6">
          <img
            src={heroImage}
            alt={title}
            className="mx-auto h-[240px] w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900">
              ${price}
            </div>
            <div className="text-slate-300 transition duration-300 group-hover:text-red-500">♥</div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{brand}</p>
          </div>

          <p className="text-sm leading-6 text-slate-600 line-clamp-3">{description}</p>
        </div>
      </article>
    </Link>
  );
}
