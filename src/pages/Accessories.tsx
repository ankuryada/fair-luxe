import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { accessories } from "../data/accessories";
// type Accessory = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//   isNew?: boolean;
// };

// const accessories: Accessory[] = [
//   {
//     id: 1,
//     name: "Structured Leather Bag",
//     category: "Bags",
//     price: 149,
//     isNew: true,
//     image:
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 2,
//     name: "Minimal Shoulder Bag",
//     category: "Bags",
//     price: 129,
//     image:
//       "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 3,
//     name: "Sculptural Hoop Earrings",
//     category: "Jewelry",
//     price: 59,
//     isNew: true,
//     image:
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 4,
//     name: "Classic Leather Belt",
//     category: "Belts",
//     price: 79,
//     image:
//       "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 5,
//     name: "Slim Rectangle Sunglasses",
//     category: "Sunglasses",
//     price: 89,
//     image:
//       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 6,
//     name: "Everyday Crossbody",
//     category: "Bags",
//     price: 119,
//     isNew: true,
//     image:
//       "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 7,
//     name: "Fine Chain Necklace",
//     category: "Jewelry",
//     price: 69,
//     image:
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     id: 8,
//     name: "Leather Card Holder",
//     category: "Accessories",
//     price: 49,
//     image:
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
//   },
// ];

const categories = [
  "All Accessories",
  "Bags",
  "Jewelry",
  "Belts",
  "Sunglasses",
];

const categoryTiles = [
  {
    title: "The Bag Edit",
    subtitle: "EVERYDAY CARRY →",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Jewelry",
    subtitle: "QUIET DETAILS →",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Belts",
    subtitle: "REFINED ESSENTIALS →",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Sunglasses",
    subtitle: "EVERYDAY SHADES →",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
  },
];

function Accessories() {
  const [category, setCategory] = useState("All Accessories");
  const [sort, setSort] = useState("Featured");

  const filteredProducts = useMemo(() => {
    let products = [...accessories];

    if (category !== "All Accessories") {
      products = products.filter(
        (product) => product.category === category
      );
    }

    if (sort === "Price: Low to High") {
      products.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      products.sort((a, b) => b.price - a.price);
    }

    if (sort === "Newest") {
      products.sort(
        (a, b) =>
          Number(b.isNew) - Number(a.isNew)
      );
    }

    return products;
  }, [category, sort]);

  const newAccessories = accessories
    .filter((product) => product.isNew)
    .slice(0, 4);

  return (
    <main className="accessories-page">

      {/* HERO */}
      <section className="accessories-hero">
        <div className="accessories-hero-content">
          <p className="accessories-eyebrow">
            ACCESSORIES
          </p>

          <h1>The Finishing Edit</h1>

          <p>
            Elevated pieces designed to complete
            your everyday wardrobe — from
            understated jewelry to timeless bags
            and considered details.
          </p>

          <a href="#accessories-products">
            Explore Accessories →
          </a>
        </div>
      </section>

      {/* CATEGORY TILES */}
      <section className="accessories-categories">
        <div className="accessories-heading">
          <p>SHOP BY CATEGORY</p>

          <a href="#accessories-products">
            View all →
          </a>
        </div>

        <div className="accessories-category-grid">
          {categoryTiles.map((item) => (
            <a
              href="#accessories-products"
              className="accessories-category-card"
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        className="accessories-products"
        id="accessories-products"
      >
        <div className="accessories-products-header">
          <div>
            <h2>Accessories</h2>
            <span>
              {filteredProducts.length} pieces
            </span>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="accessories-shop">

          {/* FILTER */}
          <aside className="accessories-sidebar">
            <h4>Category</h4>

            {categories.map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="accessory-category"
                  checked={category === item}
                  onChange={() => setCategory(item)}
                />

                {item}
              </label>
            ))}

            <div className="accessories-filter-group">
              <h4>Color</h4>

              <div className="accessory-colors">
                <span className="accessory-black" />
                <span className="accessory-beige" />
                <span className="accessory-brown" />
                <span className="accessory-gold" />
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="accessories-grid">
            {filteredProducts.map((product) => (
              <Link
                to={`/product/accessories/${product.id}`}
                className="accessory-product"
                key={product.id}
              >
                <div className="accessory-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.isNew && (
                    <span>NEW</span>
                  )}

                  <button aria-label="Wishlist">
                    ♡
                  </button>
                </div>

                <div className="accessory-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>

                  <strong>
                    ${product.price}
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="accessories-editorial">
        <div>
          <p className="accessories-eyebrow">
            THE DETAILS MATTER
          </p>

          <h2>
            The right accessory
            <br />
            changes everything.
          </h2>

          <p>
            Thoughtful details, considered materials
            and timeless pieces made to stay with
            you beyond the season.
          </p>

          <a href="#accessories-products">
            Explore the edit →
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=90"
          alt="Atelier accessories"
        />
      </section>

      {/* NEW ACCESSORIES */}
      <section className="accessories-new">
        <div className="accessories-heading">
          <h2>New Accessories</h2>

          <a href="#accessories-products">
            View all →
          </a>
        </div>

        <div className="accessories-new-grid">
          {newAccessories.map((product) => (
            <article
              className="accessory-product"
              key={`new-${product.id}`}
            >
              <div className="accessory-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <button aria-label="Wishlist">
                  ♡
                </button>
              </div>

              <div className="accessory-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <strong>
                  ${product.price}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Accessories;