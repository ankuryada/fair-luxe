
import { Link } from "react-router-dom";
import { productKey, useShop, type ShopProduct } from "../context/ShopContext";
import "./ShopCollection.css";

function ProductRow({
  product,
  action,
  label,
}: {
  product: ShopProduct;
  action: () => void;
  label: string;
}) {
  return (
    <article className="shop-item">
      <Link
        to={`/product/${product.type}/${product.id}`}
        className="shop-item-image"
      >
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="shop-item-info">
        <Link to={`/product/${product.type}/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p>{product.color}{product.size ? ` · ${product.size}` : ""}</p>
        <strong>${product.price.toFixed(2)}</strong>
        <button type="button" onClick={action}>{label}</button>
      </div>
    </article>
  );
}

export function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  return (
    <main className="shop-collection-page">
      <p className="shop-eyebrow">YOUR EDIT</p>
      <h1>Wishlist</h1>
      <p className="shop-subtitle">Pieces you love, all in one place.</p>

      {wishlist.length ? (
        <div className="shop-item-list">
          {wishlist.map((product) => (
            <ProductRow
              key={productKey(product)}
              product={product}
              label="MOVE TO BAG"
              action={() => {
                addToCart(product, 1);
                removeFromWishlist(productKey(product));
              }}
            />
          ))}
        </div>
      ) : (
        <div className="shop-empty">
          <span>♡</span>
          <h2>Your wishlist is waiting</h2>
          <p>Save the pieces you love and find them here anytime.</p>
          <Link to="/women">DISCOVER THE COLLECTION</Link>
        </div>
      )}
    </main>
  );
}

export function BagPage() {
  const { cart, changeCartQuantity, removeFromCart } = useShop();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="shop-collection-page">
      <p className="shop-eyebrow">YOUR SELECTION</p>
      <h1>Shopping Bag</h1>
      <p className="shop-subtitle">Review your pieces before checkout.</p>

      {cart.length ? (
        <>
          <div className="shop-item-list">
            {cart.map((item) => (
              <article className="shop-item" key={productKey(item)}>
                <Link
                  to={`/product/${item.type}/${item.id}`}
                  className="shop-item-image"
                >
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="shop-item-info">
                  <Link to={`/product/${item.type}/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p>{item.color} · {item.size}</p>
                  <strong>${item.price.toFixed(2)}</strong>

                  <div className="bag-quantity">
                    <button
                      type="button"
                      onClick={() =>
                        changeCartQuantity(
                          productKey(item),
                          item.quantity - 1
                        )
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        changeCartQuantity(
                          productKey(item),
                          item.quantity + 1
                        )
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => removeFromCart(productKey(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="bag-summary">
            <div>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <p>Shipping and taxes calculated at checkout.</p>
            <button
              type="button"
              onClick={() =>
                alert("Checkout will be available when payment is connected.")
              }
            >
              CONTINUE TO CHECKOUT
            </button>
            <Link to="/women">CONTINUE SHOPPING</Link>
          </aside>
        </>
      ) : (
        <div className="shop-empty">
          <span>♧</span>
          <h2>Your bag is currently empty</h2>
          <p>Discover timeless pieces for your wardrobe.</p>
          <Link to="/women">SHOP WOMENSWEAR</Link>
        </div>
      )}
    </main>
  );
}
