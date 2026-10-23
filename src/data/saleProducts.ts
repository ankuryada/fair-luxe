 export type SaleProduct = {
  id: number;
  name: string;
  category: "Women" | "Men";
  price: number;
  originalPrice: number;
  image: string;
  label: string;
};


export const saleProducts: SaleProduct[] = [
  {
    id: 1,
    name: "Linen Blend Relaxed Shirt",
    category: "Women",
    price: 1799,
    originalPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=85",
    label: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic Tailored Blazer",
    category: "Women",
    price: 2799,
    originalPrice: 3999,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=85",
    label: "LIMITED OFFER",
  },
  {
    id: 3,
    name: "Essential Cotton Shirt",
    category: "Men",
    price: 1499,
    originalPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=85",
    label: "EVERYDAY ESSENTIAL",
  },
  {
    id: 4,
    name: "Minimal Everyday Jacket",
    category: "Men",
    price: 2499,
    originalPrice: 4499,
    image:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=700&q=85",
    label: "SALE PICK",
  },
  {
    id: 5,
    name: "Soft Knit Cardigan",
    category: "Women",
    price: 1999,
    originalPrice: 3299,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=85",
    label: "NEW MARKDOWN",
  },
  {
    id: 6,
    name: "Modern Casual Overshirt",
    category: "Men",
    price: 1899,
    originalPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=85",
    label: "SALE PICK",
  },
  {
    id: 7,
    name: "Relaxed Neutral Trousers",
    category: "Women",
    price: 1599,
    originalPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d8e3e5?auto=format&fit=crop&w=700&q=85",
    label: "LAST CHANCE",
  },
  {
    id: 8,
    name: "Everyday Cotton Tee",
    category: "Men",
    price: 799,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    label: "SALE PICK",
  },
];