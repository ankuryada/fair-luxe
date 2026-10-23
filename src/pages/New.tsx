import { useState, useMemo } from "react";
import newArrivals from "../data/newArrivals";
import { Link } from "react-router-dom";
function New() {

  // ── Filter States ──────────────────────────────
  const [selectedGender,   setSelectedGender]   = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedColor,    setSelectedColor]     = useState<string[]>([]);
  const [maxPrice,         setMaxPrice]          = useState<number>(300);

  // ── Unique values from data ────────────────────
  const genders    = ["Women", "Men"];
  const categories = [...new Set(newArrivals.map((p) => p.category))];
  const colors     = [...new Set(newArrivals.map((p) => p.color))];

  // ── Toggle helper ──────────────────────────────
  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  // ── Clear All ──────────────────────────────────
  const clearAll = () => {
    setSelectedGender([]);
    setSelectedCategory([]);
    setSelectedColor([]);
    setMaxPrice(300);
  };

  // ── Filtered Products ──────────────────────────
  const filteredProducts = useMemo(() => {
    return newArrivals.filter((p) => {
      if (selectedGender.length   && !selectedGender.includes(p.gender))     return false;
      if (selectedCategory.length && !selectedCategory.includes(p.category)) return false;
      if (selectedColor.length    && !selectedColor.includes(p.color))       return false;
      if (p.price > maxPrice)                                                 return false;
      return true;
    });
  }, [selectedGender, selectedCategory, selectedColor, maxPrice]);

  // ── Active filter count ────────────────────────
  const activeCount =
    selectedGender.length +
    selectedCategory.length +
    selectedColor.length +
    (maxPrice < 300 ? 1 : 0);

  return (
    <div className="new-page">

      {/* Page Header */}
      <div className="page-header">
        <p>NEW ARRIVALS</p>
        <h1>New Arrivals</h1>
      </div>

      <div className="shop-layout">

        {/* ── SIDEBAR ─────────────────────────── */}
        <aside className="filters-sidebar">

          {/* Header */}
          <div className="filter-header">
            <h3>
              FILTERS
              {activeCount > 0 && (
                <span className="filter-badge">{activeCount}</span>
              )}
            </h3>
            {activeCount > 0 && (
              <button className="clear-btn" onClick={clearAll}>
                Clear all
              </button>
            )}
          </div>

          {/* Gender */}
          <div className="filter-group">
            <h4>Gender</h4>
            {genders.map((g) => (
              <label key={g} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedGender.includes(g)}
                  onChange={() => toggle(selectedGender, g, setSelectedGender)}
                />
                <span>{g}</span>
              </label>
            ))}
          </div>

          {/* Category */}
          <div className="filter-group">
            <h4>Category</h4>
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

          {/* Color */}
          <div className="filter-group">
            <h4>Color</h4>
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
            <h4>Max Price</h4>
            <div className="price-display">
              <span>$0</span>
              <span className="price-max-val">${maxPrice}</span>
            </div>
            <input
              type="range"
              min={0}
              max={300}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="price-slider"
            />
          </div>

        </aside>

        {/* ── PRODUCTS ────────────────────────── */}
        <div className="products-section">

          {/* Results count */}
          <p className="results-count">
            {filteredProducts.length} products
          </p>

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
                          product.originalPrice) *
                          100
                      )
                    : 0;

                return (
                  <article key={product.id} className="new-product-card">

                    <Link to={`/product/new/${product.id}`} className="card-image-wrap">
                      <img src={product.image} alt={product.name} />
                      <div className="card-badges">
                        {product.isNew && (
                          <span className="badge badge-new">✦ NEW</span>
                        )}
                        {discountPct > 0 && (
                          <span className="badge badge-sale">
                            {discountPct}% OFF
                          </span>
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

export default New;