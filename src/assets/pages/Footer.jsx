import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>📚 Book Store</h2>
          <p>Your favorite place to find amazing books.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
          <a href="/login">Login</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: bookstore@email.com</p>
          <p>Phone: +110520020124</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Book Store. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;