import './App.css';
import './pages/ProductDetails.css'
import { Routes,Route,Link } from 'react-router-dom';
import New from "./pages/New";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Clothing from "./pages/Clothing";
import Accessories from "./pages/Accessories";
import Sale from "./pages/Sale";
import Home from './pages/Home';
import logo from './../public/Fair-Luxe.png';
import ProductDetails from "./pages/productDetails";
import HeaderSearch from "./components/HeaderSearch";
import Search from "./pages/Search";

import { BagPage, WishlistPage } from "./pages/ShopCollection";
import { useShop } from "./context/ShopContext";

function App() {
const { wishlist, cart } = useShop();
const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="/" className="brand-logo">
          <img src={logo} alt="Fair Luxe — Fashion Store"
                 className="brand-logo-image"></img>
        </a>

        <nav>
          <Link to="/new">New</Link>
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/clothing">Clothing</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/sale">Sale</Link>
        </nav>

        {/* <div className="actions">
            <HeaderSearch />
          <button type="button">♡</button>
          <button type="button">♧</button>
        </div> */}

        <div className="actions">
          <HeaderSearch />

          <Link
            to="/wishlist"
            className="header-action-link"
            aria-label="Wishlist"
            title="Wishlist"
          >
            ♡
            {wishlist.length > 0 && (
              <span className="header-action-count">{wishlist.length}</span>
            )}
          </Link>

          <Link
            to="/bag"
            className="header-action-link"
            aria-label="Shopping bag"
            title="Shopping bag"
          >
            ♧
            {cartCount > 0 && (
              <span className="header-action-count">{cartCount}</span>
            )}
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/sale" element={<Sale />} />
         {/* PRODUCT DETAILS */}
        <Route
          path="/product/:type/:id"
          element={<ProductDetails />}
        />

        <Route path="/search" element={<Search />} />

        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/bag" element={<BagPage />} />
      </Routes>
      {/* Footer */}
      <footer>
        <div className="footer-brand">
          <a href="/" className="brand-logo">
          <img src={logo} alt="Fair Luxe — Fashion Store"
                 className="brand-logo-image"></img>
            </a>

          <p>Modern clothing for everyday life.</p>
        </div>

        <div>
          <h4>SHOP</h4>

          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">New arrivals</a>
          <a href="#">Sale</a>
        </div>

        <div>
          <h4>ABOUT</h4>

          <a href="#">Our story</a>
          <a href="#">Materials</a>
          <a href="#">Journal</a>
          <a href="#">Sustainability</a>
        </div>

        <div>
          <h4>HELP</h4>

          <a href="#">Contact</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
        </div>
      </footer>
    </>
  );
}

export default App;