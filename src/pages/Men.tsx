import { useState, useMemo } from "react";
import { menProducts } from "../data/menProducts";
import { Link } from "react-router-dom";
function Men() {

  // ── Filter States ──────────────────────────────
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedColor,    setSelectedColor]     = useState<string[]>([]);
  const [selectedSize,     setSelectedSize]      = useState<string[]>([]);
  const [selectedPrice,    setSelectedPrice]     = useState<string>("");
  const [sortBy,           setSortBy]            = useState<string>("featured");

  // ── Static filter options ──────────────────────
  const categories  = ["Shirts", "T-Shirts", "Trousers", "Denim", "Jackets", "Knitwear", "Suits"];
  const colors      = ["Black", "White", "Navy", "Brown", "Beige", "Grey"];
  const sizes       = ["XS", "S", "M", "L", "XL"];
  const priceRanges = [
    { label: "Under $75",  value: "under75"  },
    { label: "$75 – $150", value: "75to150"  },
    { label: "$150+",      value: "above150" },
  ];

  // ── Toggle helper ──────────────────────────────
  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  // ── Clear All ──────────────────────────────────
  const clearAll = () => {
    setSelectedCategory([]);
    setSelectedColor([]);
    setSelectedSize([]);
    setSelectedPrice("");
    setSortBy("featured");
  };

  // ── Filter + Sort ──────────────────────────────
  const filteredProducts = useMemo(() => {
    let list = menProducts.filter((p) => {
      if (selectedCategory.length && !selectedCategory.includes(p.category))              return false;
      if (selectedColor.length    && !selectedColor.includes(p.color))                    return false;
      if (selectedSize.length     && !p.sizes.some((s) => selectedSize.includes(s)))      return false;
      if (selectedPrice === "under75"  && p.price >= 75)                                  return false;
      if (selectedPrice === "75to150"  && (p.price < 75 || p.price > 150))                return false;
      if (selectedPrice === "above150" && p.price <= 150)                                 return false;
      return true;
    });

    if (sortBy === "newest")     list = [...list].sort((a) => (a.isNew     ? -1 : 1));
    if (sortBy === "featured")   list = [...list].sort((a) => (a.featured  ? -1 : 1));
    if (sortBy === "price-low")  list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [selectedCategory, selectedColor, selectedSize, selectedPrice, sortBy]);

  // ── Active filter count ────────────────────────
  const activeCount =
    selectedCategory.length +
    selectedColor.length +
    selectedSize.length +
    (selectedPrice ? 1 : 0);

  return (
    <div className="new-page">

      {/* Page Header */}
      <div className="page-header">
        <p>COLLECTION</p>
        <h1>Men</h1>
        <p className="page-subtitle">Sharp styles for every occasion</p>
      </div>

      <div className="shop-layout">

        {/* ── SIDEBAR ─────────────────────────── */}
        <aside className="filters-sidebar">

          <div className="filter-header">
            <h3>
              FILTERS
              {activeCount > 0 && (
                <span className="filter-badge">{activeCount}</span>
              )}
            </h3>
            {activeCount > 0 && (
              <button className="clear-btn" onClick={clearAll}>Clear all</button>
            )}
          </div>

          {/* Category */}
          <div className="filter-group">
            <h4>Men</h4>
            {categories.map((c) => (
              <label key={c} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedCategory.includes(c)}
                  onChange={() => toggle(selectedCategory, c, setSelectedCategory)}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>

          {/* Size */}
          <div className="filter-group">
            <h4>Sizes</h4>
            <div className="size-grid">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize.includes(s) ? "active" : ""}`}
                  onClick={() => toggle(selectedSize, s, setSelectedSize)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="filter-group">
            <h4>Colors</h4>
            {colors.map((c) => (
              <label key={c} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedColor.includes(c)}
                  onChange={() => toggle(selectedColor, c, setSelectedColor)}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="filter-group">
            <h4>Price</h4>
            {priceRanges.map((p) => (
              <label key={p.value} className="filter-checkbox">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === p.value}
                  onChange={() =>
                    setSelectedPrice(selectedPrice === p.value ? "" : p.value)
                  }
                />
                <span>{p.label}</span>
              </label>
            ))}
          </div>

        </aside>

        {/* ── PRODUCTS ────────────────────────── */}
        <div className="products-section">

          {/* Toolbar */}
          <div className="products-toolbar">
            <span className="results-count">
              {filteredProducts.length} products
            </span>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* No results */}
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <p>No products match your filters.</p>
              <button onClick={clearAll} className="clear-btn-lg">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="new-product-grid">
              {filteredProducts.map((product) => {
                const discountPct =
                  product.originalPrice > product.price
                    ? Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) * 100
                      )
                    : 0;

                return (
                  <article key={product.id} className="new-product-card">

                    <Link to={`/product/men/${product.id}`} className="card-image-wrap">
                      <img src={product.image} alt={product.name} />
                      <div className="card-badges">
                        {product.isNew && (
                          <span className="badge badge-new">✦ NEW</span>
                        )}
                        {discountPct > 0 && (
                          <span className="badge badge-sale">{discountPct}% OFF</span>
                        )}
                      </div>
                    </Link>

                    <div className="card-info">
                      <h3 className="card-name">{product.name}</h3>
                      <p className="card-color">{product.color}</p>
                      <div className="card-price">
                        <strong className="price-current">${product.price}</strong>
                        {product.originalPrice > product.price && (
                          <span className="price-original">${product.originalPrice}</span>
                        )}
                        {product.originalPrice > product.price && (
                          <span className="price-save">
                            Save ${product.originalPrice - product.price}
                          </span>
                        )}
                      </div>
                    </div>

                  </article>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Men;