import { useMemo, useState } from "react";
import { womenProducts } from "../data/womenProducts";
import { menProducts } from "../data/menProducts";
import {Link} from 'react-router-dom'


type ClothingProduct = {
  id: number;
  source: "women" | "men";
  originalId: number;
  name: string;
  category: string;
  color: string;
  price: number;
  image: string;
  isNew: boolean;
};

const clothingProducts: ClothingProduct[] = [
  ...womenProducts.map((product) => ({
    id: product.id,
      originalId: product.id,
  source: "women" as const,

    name: product.name,
    category: product.category,
    color: product.color,
    price: product.price,
    image: product.image,
    isNew: product.isNew,
  })),

  ...menProducts.map((product) => ({
    id: product.id + 1000,
      originalId: product.id,
  source: "women" as const,

    name: product.name,
    category: product.category,
    color: product.color,
    price: product.price,
    image: product.image,
    isNew: product.isNew,
  })),
];

const moods = [
  {
    title: "The Everyday Edit",
    subtitle: "CASUAL ESSENTIALS →",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "After Hours",
    subtitle: "EVENING STYLES →",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Weekend Ease",
    subtitle: "RELAXED LOOKS →",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Essentials",
    subtitle: "TIMELESS PIECES →",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All Clothing",
  "Tops",
  "Shirts",
  "Dresses",
  "Trousers",
  "Denim",
  "Jackets",
  "Knitwear",
];

function Clothing() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Clothing");

  const [sortBy, setSortBy] = useState("Featured");

  const filteredProducts = useMemo(() => {
    let products = [...clothingProducts];

    if (selectedCategory !== "All Clothing") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortBy === "Price: Low to High") {
      products.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      products.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Newest") {
      products.sort(
        (a, b) => Number(b.isNew) - Number(a.isNew)
      );
    }

    return products;
  }, [selectedCategory, sortBy]);

  const newArrivals = clothingProducts
    .filter((product) => product.isNew)
    .slice(0, 4);

  return (
    <main className="clothing-page">

      {/* HERO */}
      <section className="clothing-hero">
        <div className="clothing-hero-content">
          <p className="clothing-eyebrow">CLOTHING</p>

          <h1>The Everyday Edit</h1>

          <p className="clothing-hero-description">
            Timeless clothing designed for modern living.
            Effortless styles, refined details, and pieces
            made to fit seamlessly into your wardrobe.
          </p>

          <a href="#clothing-products" className="clothing-hero-button">
            Explore Collection →
          </a>
        </div>
      </section>

      {/* SHOP BY MOOD */}
      <section className="clothing-moods">
        <div className="clothing-section-heading">
          <p className="clothing-eyebrow">SHOP BY MOOD</p>

          <a href="#clothing-products">
            View all →
          </a>
        </div>

        <div className="clothing-mood-grid">
          {moods.map((mood) => (
            <a
              href="#clothing-products"
              className="clothing-mood-card"
              key={mood.title}
            >
              <img src={mood.image} alt={mood.title} />

              <div className="clothing-mood-overlay">
                <h3>{mood.title}</h3>
                <span>{mood.subtitle}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section
        className="clothing-products-section"
        id="clothing-products"
      >
        <div className="clothing-products-header">
          <div>
            <h2>Clothing</h2>

            <span>
              {filteredProducts.length} pieces
            </span>
          </div>

          <div className="clothing-controls">
            <button className="clothing-filter-button">
              ☷ Filter
            </button>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
            >
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="clothing-shop-layout">

          {/* FILTER */}
          <aside className="clothing-filter-sidebar">
            <h4>Category</h4>

            {categories.map((category) => (
              <label key={category}>
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() =>
                    setSelectedCategory(category)
                  }
                />

                <span>{category}</span>
              </label>
            ))}

            <div className="clothing-filter-group">
              <h4>Size</h4>

              <div className="clothing-size-options">
                {["S", "M", "L", "XL"].map((size) => (
                  <span key={size}>{size}</span>
                ))}
              </div>
            </div>

            <div className="clothing-filter-group">
              <h4>Color</h4>

              <div className="clothing-color-options">
                <span className="color-black"></span>
                <span className="color-beige"></span>
                <span className="color-white"></span>
                <span className="color-green"></span>
                <span className="color-brown"></span>
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <div className="clothing-product-grid">
            {filteredProducts.map((product) => (
              <article
                className="clothing-product-card"
                key={product.id}
              >
                <Link   to={`/product/${product.source}/${product.originalId}`}
                 className="clothing-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.isNew && (
                    <span className="clothing-new-tag">
                      NEW
                    </span>
                  )}

                  <button
                    className="clothing-wishlist"
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    ♡
                  </button>
                </Link>

                <div className="clothing-product-info">
                  <div>
                    <h3>{product.name}</h3>

                    <p>{product.category}</p>
                  </div>

                  <strong>${product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL SECTION */}
      <section className="clothing-editorial">
        <div className="clothing-editorial-content">
          <p className="clothing-eyebrow">
            THE ART OF SIMPLICITY
          </p>

          <h2>
            Less trend.
            <br />
            More timeless.
          </h2>

          <p>
            Curated pieces for a wardrobe that
            moves with you, season after season.
          </p>

          <a href="#clothing-products">
            Explore the edit →
          </a>
        </div>

        <div className="clothing-editorial-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90"
            alt="Atelier clothing collection"
          />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="clothing-new-section">
        <div className="clothing-section-heading">
          <h2>New Arrivals</h2>

          <a href="#clothing-products">
            View all →
          </a>
        </div>

        <div className="clothing-new-grid">
          {newArrivals.map((product) => (
            <article
              className="clothing-product-card"
              key={`new-${product.id}`}
            >
              <div className="clothing-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="clothing-wishlist"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  ♡
                </button>
              </div>

              <div className="clothing-product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <strong>${product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Clothing;