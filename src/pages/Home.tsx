function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p>SPRING / SUMMER 2026</p>
          <h1>Made for<br />everyday.</h1>
          <span>Quiet design. Better materials. Clothes you'll keep reaching for.</span>
          <div>
            <a href="#" className="btn dark">Shop Women</a>
            <a href="#" className="btn light">Shop Men</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="intro">
        <p className="eyebrow">THE COLLECTION</p>
        <h2>Less, but better.</h2>
        <p className="intro-text">
          Timeless clothing designed with clean silhouettes, considered
          details and everyday versatility.
        </p>
      </section>

      {/* Products */}
      <section className="products">
        <div className="section-title">
          <div>
            <p className="eyebrow">JUST IN</p>
            <h2>New arrivals</h2>
          </div>
          <a href="#">View all →</a>
        </div>

        <div className="product-grid">
          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85" alt="Neutral clothing" />
              <span className="tag">NEW</span>
            </a>
            <div className="product-info">
              <div><h3>Relaxed Linen Shirt</h3><p>Natural</p></div>
              <strong>$88</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85" alt="Woman wearing modern clothing" />
            </a>
            <div className="product-info">
              <div><h3>Everyday Overshirt</h3><p>Stone</p></div>
              <strong>$108</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85" alt="Fashion store" />
            </a>
            <div className="product-info">
              <div><h3>Straight Leg Denim</h3><p>Washed Indigo</p></div>
              <strong>$118</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85" alt="Clothing rack" />
            </a>
            <div className="product-info">
              <div><h3>Fine Knit Sweater</h3><p>Oatmeal</p></div>
              <strong>$128</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85" alt="Clothing detail" />
            </a>
            <div className="product-info">
              <div><h3>Classic Cotton Tee</h3><p>White</p></div>
              <strong>$42</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" alt="Sneaker" />
            </a>
            <div className="product-info">
              <div><h3>Minimal Everyday Sneaker</h3><p>White</p></div>
              <strong>$120</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85" alt="Leather jacket" />
            </a>
            <div className="product-info">
              <div><h3>Leather Utility Jacket</h3><p>Black</p></div>
              <strong>$198</strong>
            </div>
          </article>

          <article className="product">
            <a className="product-image" href="#">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" alt="Fashion outfit" />
            </a>
            <div className="product-info">
              <div><h3>Relaxed Tailored Trouser</h3><p>Charcoal</p></div>
              <strong>$98</strong>
            </div>
          </article>
        </div>
      </section>

      {/* Category Banner */}
      <section className="category-banner">
        <div className="banner-copy">
          <p className="eyebrow">THE EVERYDAY EDIT</p>
          <h2>Pieces that<br />work harder.</h2>
          <p>Build a wardrobe around versatile essentials that move with you.</p>
          <a href="#" className="text-link">Explore essentials →</a>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-title">
          <div>
            <p className="eyebrow">SHOP BY CATEGORY</p>
            <h2>Find your essentials</h2>
          </div>
        </div>
        <div className="category-grid">
          <a href="#" className="category women">
            <div><span>Women</span><small>Shop collection →</small></div>
          </a>
          <a href="#" className="category men">
            <div><span>Men</span><small>Shop collection →</small></div>
          </a>
          <a href="#" className="category denim">
            <div><span>Denim</span><small>Shop collection →</small></div>
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <p className="eyebrow">STAY CONNECTED</p>
        <h2>Get the latest from ATELIER.</h2>
        <p>New arrivals, stories and occasional offers.</p>
        <form>
          <input type="email" placeholder="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}

export default Home;