
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ShopProduct = {
  id: number;
  type: string;
  name: string;
  category: string;
  color: string;
  size: string;
  price: number;
  originalPrice: number;
  image: string;
};

export type CartItem = ShopProduct & {
  quantity: number;
};

type ShopContextValue = {
  wishlist: ShopProduct[];
  cart: CartItem[];
  addToWishlist: (product: ShopProduct) => void;
  removeFromWishlist: (key: string) => void;
  isWishlisted: (key: string) => boolean;
  addToCart: (product: ShopProduct, quantity: number) => void;
  changeCartQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export const productKey = (product: ShopProduct) =>
  `${product.type}-${product.id}-${product.color}-${product.size}`;

function readStorage<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<ShopProduct[]>(
    () => readStorage("fair-luxe-wishlist", [])
  );

  const [cart, setCart] = useState<CartItem[]>(
    () => readStorage("fair-luxe-cart", [])
  );

  useEffect(() => {
    localStorage.setItem("fair-luxe-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("fair-luxe-cart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo<ShopContextValue>(
    () => ({
      wishlist,
      cart,

      addToWishlist: (product) => {
        setWishlist((current) =>
          current.some((item) => productKey(item) === productKey(product))
            ? current
            : [...current, product]
        );
      },

      removeFromWishlist: (key) => {
        setWishlist((current) =>
          current.filter((item) => productKey(item) !== key)
        );
      },

      isWishlisted: (key) =>
        wishlist.some((item) => productKey(item) === key),

      addToCart: (product, quantity) => {
        setCart((current) => {
          const key = productKey(product);
          const existing = current.find(
            (item) => productKey(item) === key
          );

          return existing
            ? current.map((item) =>
                productKey(item) === key
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            : [...current, { ...product, quantity }];
        });
      },

      changeCartQuantity: (key, quantity) => {
        setCart((current) =>
          quantity < 1
            ? current.filter((item) => productKey(item) !== key)
            : current.map((item) =>
                productKey(item) === key
                  ? { ...item, quantity }
                  : item
              )
        );
      },

      removeFromCart: (key) => {
        setCart((current) =>
          current.filter((item) => productKey(item) !== key)
        );
      },
    }),
    [wishlist, cart]
  );

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
}
