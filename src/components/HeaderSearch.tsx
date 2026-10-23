
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchableProducts } from "../data/searchProducts";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return [];

    return searchableProducts
      .filter((product) =>
        `${product.name} ${product.category} ${
          product.gender ?? ""
        } ${product.color ?? ""}`
          .toLowerCase()
          .includes(term)
      )
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const term = query.trim();
    if (!term) return;

    navigate(`/search?q=${encodeURIComponent(term)}`);
    setIsOpen(false);
  }

  return (
    <div className="header-search" ref={wrapperRef}>
      <button
        type="button"
        className="header-search-toggle"
        aria-label="Open product search"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4 4" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="header-search-panel">
          <form
            onSubmit={submitSearch}
            className="header-search-form"
            role="search"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search clothing, bags, shirts..."

              
              aria-label="Search Fair Luxe products"
            />

            {query && (
              <button
                type="button"
                className="header-search-clear"
                onClick={() => setQuery("")}
              >
                Clear
              </button>
            )}
          </form>

          {!query.trim() ? (
            <div className="header-search-hint">
              <span>POPULAR SEARCHES</span>
              <div className="header-search-tags">
                {["Linen", "Shirts", "Dresses", "Bags"].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="header-search-results">
              <p className="header-search-label">SUGGESTED PRODUCTS</p>

              {results.map((product) => (
                <Link
                  key={`${product.type}-${product.id}`}
                  to={`/product/${product.type}/${product.id}`}
                  className="header-search-result"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={product.image} alt="" />

                  <span className="header-search-result-info">
                    <span>{product.name}</span>
                    <small>{product.category}</small>
                  </span>

                  <span className="header-search-price">
                    {product.type === "sale" ? "₹" : "$"}
                    {product.price.toLocaleString("en-IN")}
                  </span>
                </Link>
              ))}

              <button
                type="button"
                className="header-search-view-all"
                onClick={() => {
                  navigate(
                    `/search?q=${encodeURIComponent(query.trim())}`
                  );
                  setIsOpen(false);
                }}
              >
                View all results <span>→</span>
              </button>
            </div>
          ) : (
            <div className="header-search-empty">
              <strong>No products found</strong>
              <span>Try another product name, category or colour.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
