export type productType = {
  id: number;
  title: string;
  description: string;
  slug: string;
  images: string[];
  price: number;
};

export const products: productType[] = [
  {
    id: 1,
    title: "Apex Runner",
    description: "A lightweight performance sneaker with breathable mesh, padded support, and street-ready style.",
    slug: "apex-runner",
    images: [
      "https://placehold.co/800x600?text=Apex+Runner+1",
      "https://placehold.co/800x600?text=Apex+Runner+2",
      "https://placehold.co/800x600?text=Apex+Runner+3",
    ],
    price: 129,
  },
  {
    id: 2,
    title: "Urban Glide",
    description: "Modern cushioning, reflective accents, and a sculpted sole for everyday confidence.",
    slug: "urban-glide",
    images: [
      "https://placehold.co/800x600?text=Urban+Glide+1",
      "https://placehold.co/800x600?text=Urban+Glide+2",
      "https://placehold.co/800x600?text=Urban+Glide+3",
    ],
    price: 149,
  },
  {
    id: 3,
    title: "Trail Surge",
    description: "Rugged traction, reinforced overlays, and responsive comfort built for all-terrain daily wear.",
    slug: "trail-surge",
    images: [
      "https://placehold.co/800x600?text=Trail+Surge+1",
      "https://placehold.co/800x600?text=Trail+Surge+2",
      "https://placehold.co/800x600?text=Trail+Surge+3",
    ],
    price: 159,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
