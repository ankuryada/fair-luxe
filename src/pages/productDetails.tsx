import { useMemo, useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

import { womenProducts } from "../data/womenProducts";
import { menProducts } from "../data/menProducts";
import newArrivals from "../data/newArrivals";
import { useShop, productKey } from "../context/ShopContext";

type ProductDetailsData = {
  id: number;
  name: string;
  category: string;
  color: string;
  sizes: string[];
  price: number;
  originalPrice: number;
  image: string;
  images:string[];
  gender?: string;
  rating?: number;
  reviews?: number;
  description?: string;
};

function ProductDetails() {
  const { type, id } = useParams();
const { addToCart, addToWishlist, isWishlisted } = useShop();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);


  

  /* ---------------------------------------------
     FIND PRODUCT
  --------------------------------------------- */

  const product = useMemo<ProductDetailsData | null>(() => {
    const productId = Number(id);

    if (type === "women") {
      const found = womenProducts.find(
        (product) => product.id === productId
      );

      if (!found) return null;

      return {
        id: found.id,
        name: found.name,
        category: found.category,
        color: found.color,
        sizes: found.size,
        price: found.price,
        originalPrice: found.originalPrice,
        image: found.image,
        images:found.images,
        gender: "Women",
      };
    }

    if (type === "men") {
      const found = menProducts.find(
        (product) => product.id === productId
      );

      if (!found) return null;

      return {
  id: found.id,
  name: found.name,
  category: found.category,
  color: found.color,
  sizes: found.sizes,
  price: found.price,
  originalPrice: found.originalPrice,
  image: found.image,
  images: found.images?.length ? found.images : [found.image],
  gender: "Men",
};
    }

    if (type === "new") {
      const found = newArrivals.find(
        (product) => product.id === productId
      );

      if (!found) return null;

      return {
  id: found.id,
  name: found.name,
  category: found.category,
  color: found.color,
  sizes: ["XS", "S", "M", "L", "XL"],
  price: found.price,
  originalPrice: found.originalPrice,
  image: found.image,
  images: found.images?.length ? found.images : [found.image],
  gender: found.gender,
  rating: found.rating,
  reviews: found.reviews,
};
    }

    return null;
  }, [type, id]);

  /* ---------------------------------------------
     PRODUCT NOT FOUND
  --------------------------------------------- */

  if (!product) {
    return (
      <main className="product-not-found">
        <p>PRODUCT NOT FOUND</p>

        <h1>
          We couldn't find this product.
        </h1>

        <Link to="/">
          Back to Home
        </Link>
      </main>
    );
  }

  /* ---------------------------------------------
     PRODUCT IMAGES
  --------------------------------------------- */

 const productImages = product.images?.length
  ? product.images
  : [product.image];

useEffect(() => {
  setSelectedImage(productImages[0]);
}, [type, id]);

const activeImage = productImages.includes(selectedImage)
  ? selectedImage
  : productImages[0];

  /* ---------------------------------------------
     DISCOUNT
  --------------------------------------------- */

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  /* ---------------------------------------------
     COLORS
  --------------------------------------------- */

  const colors = [
    product.color,
    "Black",
    "Brown",
  ].filter(
    (color, index, array) =>
      array.indexOf(color) === index
  );

  return (
    <main className="product-details-page">

      {/* -----------------------------------------
          BREADCRUMB
      ----------------------------------------- */}

      <div className="product-breadcrumb">

        <Link to="/">
          Home
        </Link>

        <span>/</span>

        <Link to={`/${type === "new" ? "new" : type}`}>
          {type === "new"
            ? "New Arrivals"
            : type}
        </Link>

        <span>/</span>

        <span>{product.name}</span>

      </div>


      {/* -----------------------------------------
          MAIN PRODUCT SECTION
      ----------------------------------------- */}

      <section className="product-details-layout">

        {/* ---------------------------------------
            LEFT - IMAGE GALLERY
        --------------------------------------- */}

        <div className="product-gallery">

          {/* Thumbnails */}

         <div className="product-thumbnails">
  {productImages.map((image, index) => (
    <button
      key={`${image}-${index}`}
      type="button"
      className={`product-thumbnail ${
        activeImage === image ? "active" : ""
      }`}
      onClick={() => setSelectedImage(image)}
    >
      <img
        src={image}
        alt={`${product.name} view ${index + 1}`}
      />
    </button>
  ))}
</div>

<div className="product-main-image">
  <img src={activeImage} alt={product.name} />
</div>


          {/* Main image */}

          <div className="product-main-image">

            <img
              src={activeImage}
              alt={product.name}
            />

            {discount > 0 && (
              <span className="product-detail-sale">
                {discount}% OFF
              </span>
            )}

          </div>

        </div>


        {/* ---------------------------------------
            RIGHT - PRODUCT INFORMATION
        --------------------------------------- */}

        <div className="product-information">

          <p className="product-detail-category">
            {product.gender} / {product.category}
          </p>

          <h1 className="product-detail-title">
            {product.name}
          </h1>


          {/* Rating */}

          <div className="product-rating">

            <span className="stars">
              ★★★★★
            </span>

            <span>
              {product.rating || 4.8}
            </span>

            <button>
              {product.reviews || 24} reviews
            </button>

          </div>


          {/* Price */}

          <div className="product-detail-price">

            <strong>
              ${product.price}
            </strong>

            {product.originalPrice >
              product.price && (
              <del>
                ${product.originalPrice}
              </del>
            )}

            {discount > 0 && (
              <span>
                Save $
                {product.originalPrice -
                  product.price}
              </span>
            )}

          </div>


          {/* Divider */}

          <div className="product-divider" />


          {/* Color */}

          <div className="product-option-section">

            <div className="product-option-heading">

              <span>
                Color
              </span>

              <strong>
                {selectedColor ||
                  product.color}
              </strong>

            </div>


            <div className="color-options">

              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  title={color}
                  className={`color-swatch ${
                    selectedColor === color ||
                    (!selectedColor &&
                      color === product.color)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedColor(color)
                  }
                  style={{
                    backgroundColor:
                      color.toLowerCase() ===
                      "beige"
                        ? "#d8c7aa"
                        : color.toLowerCase() ===
                          "brown"
                        ? "#74513b"
                        : color.toLowerCase() ===
                          "white"
                        ? "#fff"
                        : "#111",
                  }}
                />
              ))}

            </div>

          </div>


          {/* Size */}

          <div className="product-option-section">

            <div className="product-option-heading">

              <span>
                Size
              </span>

              <button className="size-guide">
                Size Guide
              </button>

            </div>


            <div className="size-options">

              {product.sizes.map(
                (size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-button ${
                      selectedSize === size
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size}
                  </button>
                )
              )}

            </div>


            {!selectedSize && (
              <p className="size-message">
                Please select a size
              </p>
            )}

          </div>


          {/* Quantity */}

          <div className="quantity-section">

            <span>
              Quantity
            </span>

            <div className="quantity-control">

              <button
                type="button"
                onClick={() =>
                  setQuantity(
                    Math.max(
                      1,
                      quantity - 1
                    )
                  )
                }
              >
                −
              </button>

              <span>
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity(
                    quantity + 1
                  )
                }
              >
                +
              </button>

            </div>

          </div>


          {/* Add to bag */}

         
          <button
            className="add-to-bag"
            onClick={() => {
              if (!selectedSize) {
                alert("Please select a size first.");
                return;
              }

              addToCart(
                {
                  id: product.id,
                  type: type || "women",
                  name: product.name,
                  category: product.category,
                  color: selectedColor || product.color,
                  size: selectedSize,
                  price: product.price,
                  originalPrice: product.originalPrice,
                  image: product.image,
                },
                quantity
              );
            }}
          >
            ADD TO BAG
          </button>



          {/* Wishlist */}

          {/* <button
            type="button"
            className="wishlist-button"
          >
            ♡ ADD TO WISHLIST
          </button> */}

          
        {/* Wishlist */}
        <button
          type="button"
          className="wishlist-button"
          onClick={() => {
            const wishlistProduct = {
              id: product.id,
              type: type || "women",
              name: product.name,
              category: product.category,
              color: selectedColor || product.color,
              size: selectedSize || "",
              price: product.price,
              originalPrice: product.originalPrice,
              image: product.image,
            };

            if (isWishlisted(productKey(wishlistProduct))) {
              alert("This item is already in your wishlist.");
              return;
            }

            addToWishlist(wishlistProduct);
          }}
        >
          {isWishlisted(
            productKey({
              id: product.id,
              type: type || "women",
              name: product.name,
              category: product.category,
              color: selectedColor || product.color,
              size: selectedSize || "",
              price: product.price,
              originalPrice: product.originalPrice,
              image: product.image,
            })
          )
            ? "♥ ADDED TO WISHLIST"
            : "♡ ADD TO WISHLIST"}
        </button>



          {/* -------------------------------------
              PRODUCT ACCORDIONS
          ------------------------------------- */}

          <div className="product-accordions">

            <details open>

              <summary>
                <span>
                  Product Details
                </span>

                <span>+</span>
              </summary>

              <p>
                Designed for effortless
                everyday styling, this piece
                combines timeless design with
                modern proportions and
                considered finishing.
              </p>

            </details>


            <details>

              <summary>
                <span>
                  Material & Care
                </span>

                <span>+</span>
              </summary>

              <p>
                Crafted with carefully
                selected materials. Follow
                the care instructions on the
                garment label to maintain
                the quality and finish.
              </p>

            </details>


            <details>

              <summary>
                <span>
                  Shipping & Returns
                </span>

                <span>+</span>
              </summary>

              <p>
                Orders are carefully packed
                and dispatched. Returns are
                accepted according to the
                Fair-Luxe return policy.
              </p>

            </details>

          </div>

        </div>

      </section>


      {/* -----------------------------------------
          YOU MAY ALSO LIKE
      ----------------------------------------- */}

      <section className="recommended-products">

        <div className="recommended-heading">

          <p>
            COMPLETE THE LOOK
          </p>

          <h2>
            You May Also Like
          </h2>

        </div>


        <div className="recommended-grid">

          {womenProducts
            .filter(
              (item) =>
                item.id !==
                Number(id)
            )
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.id}
                to={`/product/women/${item.id}`}
                className="recommended-card"
              >

                <div className="recommended-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.color}
                </p>

                <strong>
                  ${item.price}
                </strong>

              </Link>
            ))}

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;