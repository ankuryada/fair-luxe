export type SaleProduct = {
  id: number;
  name: string;
  category: "Women" | "Men";
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  label: string;
};

export const saleProducts: SaleProduct[] = [
  {
    id: 1,
    name: 'Linen Blend Relaxed Shirt',
    category: 'Women',
    price: 1799,
    originalPrice: 2999,
    image: "/images/products/sale/1-front.jpg",
    images: [
      "/images/products/sale/1-front.jpg",
      "/images/products/sale/1-back.jpg",
      "/images/products/sale/1-side.jpg",
      "/images/products/sale/1-detail.jpg"
    ],
    label: 'BESTSELLER',
  },
  {
    id: 2,
    name: 'Classic Tailored Blazer',
    category: 'Women',
    price: 2799,
    originalPrice: 3999,
    image: "/images/products/sale/2-front.jpg",
    images: [
      "/images/products/sale/2-front.jpg",
      "/images/products/sale/2-back.jpg",
      "/images/products/sale/2-side.jpg",
      "/images/products/sale/2-detail.jpg"
    ],
    label: 'LIMITED OFFER',
  },
  {
    id: 3,
    name: 'Essential Cotton Shirt',
    category: 'Men',
    price: 1499,
    originalPrice: 2499,
    image: "/images/products/sale/3-front.jpg",
    images: [
      "/images/products/sale/3-front.jpg",
      "/images/products/sale/3-back.jpg",
      "/images/products/sale/3-side.jpg",
      "/images/products/sale/3-detail.jpg"
    ],
    label: 'EVERYDAY ESSENTIAL',
  },
  {
    id: 4,
    name: 'Minimal Everyday Jacket',
    category: 'Men',
    price: 2499,
    originalPrice: 4499,
    image: "/images/products/sale/4-front.jpg",
    images: [
      "/images/products/sale/4-front.jpg",
      "/images/products/sale/4-back.jpg",
      "/images/products/sale/4-side.jpg",
      "/images/products/sale/4-detail.jpg"
    ],
    label: 'SALE PICK',
  },
  {
    id: 5,
    name: 'Soft Knit Cardigan',
    category: 'Women',
    price: 1999,
    originalPrice: 3299,
    image: "/images/products/sale/5-front.jpg",
    images: [
      "/images/products/sale/5-front.jpg",
      "/images/products/sale/5-back.jpg",
      "/images/products/sale/5-side.jpg",
      "/images/products/sale/5-detail.jpg"
    ],
    label: 'NEW MARKDOWN',
  },
  {
    id: 6,
    name: 'Modern Casual Overshirt',
    category: 'Men',
    price: 1899,
    originalPrice: 2999,
    image: "/images/products/sale/6-front.jpg",
    images: [
      "/images/products/sale/6-front.jpg",
      "/images/products/sale/6-back.jpg",
      "/images/products/sale/6-side.jpg",
      "/images/products/sale/6-detail.jpg"
    ],
    label: 'SALE PICK',
  },
  {
    id: 7,
    name: 'Relaxed Neutral Trousers',
    category: 'Women',
    price: 1599,
    originalPrice: 2499,
    image: "/images/products/sale/7-front.jpg",
    images: [
      "/images/products/sale/7-front.jpg",
      "/images/products/sale/7-back.jpg",
      "/images/products/sale/7-side.jpg",
      "/images/products/sale/7-detail.jpg"
    ],
    label: 'LAST CHANCE',
  },
  {
    id: 8,
    name: 'Everyday Cotton Tee',
    category: 'Men',
    price: 799,
    originalPrice: 1299,
    image: "/images/products/sale/8-front.jpg",
    images: [
      "/images/products/sale/8-front.jpg",
      "/images/products/sale/8-back.jpg",
      "/images/products/sale/8-side.jpg",
      "/images/products/sale/8-detail.jpg"
    ],
    label: 'SALE PICK',
  }
];
