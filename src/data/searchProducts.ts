
import { womenProducts } from "./womenProducts";
import { menProducts } from "./menProducts";
import newArrivals from "./newArrivals";
import { accessories } from "./accessories";
import { saleProducts } from "./saleProducts";

export type SearchProduct = {
  id: number;
  type: "women" | "men" | "new" | "accessories" | "sale";
  name: string;
  category: string;
  color?: string;
  price: number;
  image: string;
  gender?: string;
};

export const searchableProducts: SearchProduct[] = [
  ...womenProducts.map((p) => ({
    id: p.id,
    type: "women" as const,
    name: p.name,
    category: p.category,
    color: p.color,
    price: p.price,
    image: p.image,
    gender: "Women",
  })),
  ...menProducts.map((p) => ({
    id: p.id,
    type: "men" as const,
    name: p.name,
    category: p.category,
    color: p.color,
    price: p.price,
    image: p.image,
    gender: "Men",
  })),
  ...newArrivals.map((p) => ({
    id: p.id,
    type: "new" as const,
    name: p.name,
    category: p.category,
    color: p.color,
    price: p.price,
    image: p.image,
    gender: p.gender,
  })),
  ...accessories.map((p) => ({
    id: p.id,
    type: "accessories" as const,
    name: p.name,
    category: p.category,
    price: p.price,
    image: p.image,
    gender: "Accessories",
  })),
  ...saleProducts.map((p) => ({
    id: p.id,
    type: "sale" as const,
    name: p.name,
    category: p.category,
    price: p.price,
    image: p.image,
    gender: p.category,
  })),
];
