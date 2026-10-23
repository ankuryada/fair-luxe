export type Accessory = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  isNew?: boolean;
};

export const accessories: Accessory[] = [
  {
    id: 1,
    name: 'Structured Leather Bag',
    category: 'Bags',
    price: 149,
    isNew: true,
    image: "/images/products/accessories/1-front.jpg",
    images: [
      "/images/products/accessories/1-front.jpg",
      "/images/products/accessories/1-back.jpg",
      "/images/products/accessories/1-side.jpg",
      "/images/products/accessories/1-detail.jpg"
    ],
  },
  {
    id: 2,
    name: 'Minimal Shoulder Bag',
    category: 'Bags',
    price: 129,
    isNew: false,
    image: "/images/products/accessories/2-front.jpg",
    images: [
      "/images/products/accessories/2-front.jpg",
      "/images/products/accessories/2-back.jpg",
      "/images/products/accessories/2-side.jpg",
      "/images/products/accessories/2-detail.jpg"
    ],
  },
  {
    id: 3,
    name: 'Sculptural Hoop Earrings',
    category: 'Jewelry',
    price: 59,
    isNew: true,
    image: "/images/products/accessories/3-front.jpg",
    images: [
      "/images/products/accessories/3-front.jpg",
      "/images/products/accessories/3-back.jpg",
      "/images/products/accessories/3-side.jpg",
      "/images/products/accessories/3-detail.jpg"
    ],
  },
  {
    id: 4,
    name: 'Classic Leather Belt',
    category: 'Belts',
    price: 79,
    isNew: false,
    image: "/images/products/accessories/4-front.jpg",
    images: [
      "/images/products/accessories/4-front.jpg",
      "/images/products/accessories/4-back.jpg",
      "/images/products/accessories/4-side.jpg",
      "/images/products/accessories/4-detail.jpg"
    ],
  },
  {
    id: 5,
    name: 'Slim Rectangle Sunglasses',
    category: 'Sunglasses',
    price: 89,
    isNew: false,
    image: "/images/products/accessories/5-front.jpg",
    images: [
      "/images/products/accessories/5-front.jpg",
      "/images/products/accessories/5-back.jpg",
      "/images/products/accessories/5-side.jpg",
      "/images/products/accessories/5-detail.jpg"
    ],
  },
  {
    id: 6,
    name: 'Everyday Crossbody',
    category: 'Bags',
    price: 119,
    isNew: true,
    image: "/images/products/accessories/6-front.jpg",
    images: [
      "/images/products/accessories/6-front.jpg",
      "/images/products/accessories/6-back.jpg",
      "/images/products/accessories/6-side.jpg",
      "/images/products/accessories/6-detail.jpg"
    ],
  },
  {
    id: 7,
    name: 'Fine Chain Necklace',
    category: 'Jewelry',
    price: 69,
    isNew: false,
    image: "/images/products/accessories/7-front.jpg",
    images: [
      "/images/products/accessories/7-front.jpg",
      "/images/products/accessories/7-back.jpg",
      "/images/products/accessories/7-side.jpg",
      "/images/products/accessories/7-detail.jpg"
    ],
  },
  {
    id: 8,
    name: 'Leather Card Holder',
    category: 'Accessories',
    price: 49,
    isNew: false,
    image: "/images/products/accessories/8-front.jpg",
    images: [
      "/images/products/accessories/8-front.jpg",
      "/images/products/accessories/8-back.jpg",
      "/images/products/accessories/8-side.jpg",
      "/images/products/accessories/8-detail.jpg"
    ],
  }
];
