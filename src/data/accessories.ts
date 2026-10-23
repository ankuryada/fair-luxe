 export type Accessory = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
};

 export const accessories: Accessory[] = [
  {
    id: 1,
    name: "Structured Leather Bag",
    category: "Bags",
    price: 149,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Minimal Shoulder Bag",
    category: "Bags",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Sculptural Hoop Earrings",
    category: "Jewelry",
    price: 59,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Classic Leather Belt",
    category: "Belts",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Slim Rectangle Sunglasses",
    category: "Sunglasses",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Everyday Crossbody",
    category: "Bags",
    price: 119,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Fine Chain Necklace",
    category: "Jewelry",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Leather Card Holder",
    category: "Accessories",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
  },
];