
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchableProducts } from "../data/searchProducts";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const query = (params.get("q") ?? "").trim();

  const results = useMemo(() => {
    const term = query.toLowerCase();

    if (!term) return [];

    return searchableProducts.filter((product) =>
      `${product.name} ${product.category} ${
        product.gender ?? ""
      } ${product.color ?? ""}`
        .toLowerCase()
        .includes(term)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-10 text-[#171714] sm:px-8 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b7658]">
          Fair Luxe / Search
        </p>

        <h1 className="mt-3 font-serif text-3xl sm:text-5xl">
          Find your next favourite.
        </h1>

        <form
          className="mt-7 flex max-w-2xl gap-3 border-b border-neutral-400 pb-3"
          onSubmit={(event) => event.preventDefault()}
          role="search"
        >
          <input
            value={query}
            onChange={(event) =>
              setParams(
                event.target.value ? { q: event.target.value } : {}
              )
            }
            placeholder="Search by product, category or colour..."
            aria-label="Search products"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500"
          />

          {query && (
            <button
              type="button"
              onClick={() => setParams({})}
              className="text-xs underline underline-offset-4"
            >
              Clear
            </button>
          )}
        </form>

        <p className="mt-6 text-sm text-neutral-500">
          {query
            ? `${results.length} ${
                results.length === 1 ? "result" : "results"
              } for "${query}"`
            : "Search our collections"}
        </p>

        {results.length > 0 ? (
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
            {results.map((product) => (
              <Link
                key={`${product.type}-${product.id}`}
                to={`/product/${product.type}/${product.id}`}
                className="group min-w-0"
              >
                <div className="overflow-hidden bg-[#eeeae3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  {product.gender ?? product.category}
                </p>

                <h2 className="mt-1 text-sm text-neutral-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm">
                  {product.type === "sale" ? "₹" : "$"}
                  {product.price.toLocaleString("en-IN")}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center sm:py-24">
            <p className="font-serif text-2xl">
              {query ? "No pieces found" : "What are you looking for?"}
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              {query
                ? "Try another product name, category or colour."
                : "Try linen, shirts, dresses or bags."}
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Linen", "Shirts", "Dresses", "Bags"].map((term) => (
                <button
                  key={term}
                  onClick={() => setParams({ q: term })}
                  className="border border-neutral-300 px-4 py-2 text-xs hover:border-black"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
