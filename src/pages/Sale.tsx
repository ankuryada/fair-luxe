
import { useMemo, useState } from "react";
import { saleProducts } from "../data/saleProducts";
import { Link } from "react-router-dom";
// type SaleProduct = {
//   id: number;
//   name: string;
//   category: "Women" | "Men";
//   price: number;
//   originalPrice: number;
//   image: string;
//   label: string;
// };


// const products: SaleProduct[] = [
//   {
//     id: 1,
//     name: "Linen Blend Relaxed Shirt",
//     category: "Women",
//     price: 1799,
//     originalPrice: 2999,
//     image:
//       "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=85",
//     label: "BESTSELLER",
//   },
//   {
//     id: 2,
//     name: "Classic Tailored Blazer",
//     category: "Women",
//     price: 2799,
//     originalPrice: 3999,
//     image:
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=85",
//     label: "LIMITED OFFER",
//   },
//   {
//     id: 3,
//     name: "Essential Cotton Shirt",
//     category: "Men",
//     price: 1499,
//     originalPrice: 2499,
//     image:
//       "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=85",
//     label: "EVERYDAY ESSENTIAL",
//   },
//   {
//     id: 4,
//     name: "Minimal Everyday Jacket",
//     category: "Men",
//     price: 2499,
//     originalPrice: 4499,
//     image:
//       "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=700&q=85",
//     label: "SALE PICK",
//   },
//   {
//     id: 5,
//     name: "Soft Knit Cardigan",
//     category: "Women",
//     price: 1999,
//     originalPrice: 3299,
//     image:
//       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=85",
//     label: "NEW MARKDOWN",
//   },
//   {
//     id: 6,
//     name: "Modern Casual Overshirt",
//     category: "Men",
//     price: 1899,
//     originalPrice: 2999,
//     image:
//       "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=85",
//     label: "SALE PICK",
//   },
//   {
//     id: 7,
//     name: "Relaxed Neutral Trousers",
//     category: "Women",
//     price: 1599,
//     originalPrice: 2499,
//     image:
//       "https://images.unsplash.com/photo-1506629905607-d9c297d8e3e5?auto=format&fit=crop&w=700&q=85",
//     label: "LAST CHANCE",
//   },
//   {
//     id: 8,
//     name: "Everyday Cotton Tee",
//     category: "Men",
//     price: 799,
//     originalPrice: 1299,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
//     label: "SALE PICK",
//   },
// ];

const products = saleProducts;

const money = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Sale() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(5000);

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      return matchesCategory && product.price <= maxPrice;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "discount") {
      result.sort(
        (a, b) =>
          (b.originalPrice - b.price) / b.originalPrice -
          (a.originalPrice - a.price) / a.originalPrice
      );
    }

    return result;
  }, [category, sort, maxPrice]);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#171714]">
      {/* Sale hero */}
      <section className="relative isolate overflow-hidden bg-[#eae3d8]">
        <div className="grid min-h-[420px] md:min-h-[510px] md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-6 py-16 sm:px-12 lg:px-20">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#76644e]">
              The Fair Luxe Sale Edit
            </p>

            <h1 className="max-w-lg font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Luxury looks.
              <br />
              Better prices.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
              Discover timeless essentials and elevated everyday
              styles, now at special prices. Find your next favourite.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sale-products"
                onClick={() => setCategory("Women")}
                className="px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#514638]"
              >
                Shop Women
              </a>

              <a
                href="#sale-products"
                onClick={() => setCategory("Men")}
                className="border border-[#171714] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] transition hover:bg-white/60"
              >
                Shop Men
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
              Selected styles · Limited availability
            </p>
          </div>

          <div className="relative min-h-[300px] md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90"
              alt="Fashion collection editorial"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/5" />

            <div className="absolute bottom-6 right-6 bg-[#faf9f6]/95 px-5 py-4 sm:bottom-10 sm:right-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                The seasonal edit
              </p>
              <p className="mt-1 font-serif text-2xl">
                Style that stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional strip */}
      <section className="border-b border-neutral-200 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-[10px] uppercase tracking-[0.18em] text-neutral-600 sm:text-xs">
          <span>Considered design</span>
          <span className="hidden text-[#b69a70] sm:inline">✦</span>
          <span>Everyday essentials</span>
          <span className="hidden text-[#b69a70] sm:inline">✦</span>
          <span>Special prices on selected styles</span>
        </div>
      </section>

      {/* Category shortcuts */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-8 sm:gap-5 sm:px-6 lg:px-8">
        <button
          onClick={() => {
            setCategory("Women");
            document
              .getElementById("sale-products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`border px-4 py-5 text-left transition sm:px-7 ${
            category === "Women"
              ? "border-black bg-[#eee7dc]"
              : "border-neutral-200 bg-white hover:bg-[#f1ede6]"
          }`}
        >
          <span className="block font-serif text-xl sm:text-2xl">
            Women's Sale
          </span>
          <span className="mt-2 block text-xs text-neutral-500">
            Refined everyday dressing
          </span>
        </button>

        <button
          onClick={() => {
            setCategory("Men");
            document
              .getElementById("sale-products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`border px-4 py-5 text-left transition sm:px-7 ${
            category === "Men"
              ? "border-black bg-[#eee7dc]"
              : "border-neutral-200 bg-white hover:bg-[#f1ede6]"
          }`}
        >
          <span className="block font-serif text-xl sm:text-2xl">
            Men's Sale
          </span>
          <span className="mt-2 block text-xs text-neutral-500">
            Modern wardrobe staples
          </span>
        </button>
      </section>

      {/* Products */}
      <section
        id="sale-products"
        className="mx-auto max-w-7xl scroll-mt-8 px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-5 border-b border-neutral-300 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#8b7658]">
              Special prices, lasting style
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              The Sale Collection
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              {filteredProducts.length} styles to discover
            </p>
          </div>

          <button
            onClick={() => {
              setCategory("All");
              setMaxPrice(5000);
              setSort("featured");
            }}
            className="self-start text-xs underline underline-offset-4 sm:self-auto"
          >
            Reset filters
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-5 border-b border-neutral-200 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", "Women", "Men"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`border px-4 py-2 text-xs transition ${
                  category === item
                    ? "border-[#171714] bg-[#171714] text-white"
                    : "border-neutral-300 bg-white hover:border-black"
                }`}
              >
                {item === "All" ? "All styles" : item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="flex items-center gap-3 text-xs text-neutral-600">
              Max price: {money(maxPrice)}
              <input
                type="range"
                min={500}
                max={5000}
                step={100}
                value={maxPrice}
                onChange={(event) =>
                  setMaxPrice(Number(event.target.value))
                }
                className="w-28 accent-[#171714]"
              />
            </label>

            <label className="flex items-center gap-2 text-xs">
              <span className="text-neutral-500">Sort by</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="max-w-48 border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-black"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="discount">Biggest discount</option>
              </select>
            </label>
          </div>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 pt-7 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              const discount = Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              );

              return (
                <Link to={`/product/sale/${product.id}`}
                     key={product.id} className="group min-w-0">
                  <div className="relative overflow-hidden bg-[#eeeae3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                    <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[9px] font-medium uppercase tracking-wider sm:left-3 sm:top-3 sm:text-[10px]">
                      {discount}% OFF
                    </span>

                    <span className="absolute bottom-2 right-2 bg-[#171714] px-2 py-1 text-[9px] uppercase tracking-wider text-white sm:bottom-3 sm:right-3">
                      Sale
                    </span>
                  </div>

                  <div className="pt-3">
                    <p className="mb-1 text-[9px] uppercase tracking-[0.16em] text-neutral-500 sm:text-[10px]">
                      {product.label} · {product.category}
                    </p>

                    <h3 className="text-sm leading-5 sm:text-base">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-medium">
                        {money(product.price)}
                      </span>
                      <span className="text-neutral-400 line-through">
                        {money(product.originalPrice)}
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] text-[#75654e]">
                      You save{" "}
                      {money(product.originalPrice - product.price)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-serif text-2xl">No styles found</h3>
            <p className="mt-2 text-sm text-neutral-500">
              Try increasing your price range or resetting the filters.
            </p>
            <button
              onClick={() => {
                setCategory("All");
                setMaxPrice(5000);
              }}
              className="mt-5 bg-[#171714] px-6 py-3 text-xs uppercase tracking-widest text-white"
            >
              Show all styles
            </button>
          </div>
        )}
      </section>

      {/* Closing banner */}
      <section className="bg-[#eae3d8] px-5 py-14 text-center sm:py-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#75654e]">
          Fair Luxe
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Fewer things. Better choices.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-neutral-600">
          Explore timeless pieces designed to become part of your
          everyday wardrobe.
        </p>
        <a
          href="/"
          className="mt-7 inline-block border border-[#171714] px-7 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-[#171714] hover:text-white"
        >
          Discover Fair Luxe
        </a>
      </section>
    </main>
  );
}
