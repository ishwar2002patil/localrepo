import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ user }) {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const fav = JSON.parse(localStorage.getItem("favorites")) || [];
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      setFavoriteCount(fav.length);

      const totalBooks = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCartCount(totalBooks);
    };

    updateCounts();

    window.addEventListener("favoritesUpdated", updateCounts);
    window.addEventListener("cartUpdated", updateCounts);

    return () => {
      window.removeEventListener("favoritesUpdated", updateCounts);
      window.removeEventListener("cartUpdated", updateCounts);
    };
  }, []);

  return (
    <nav className="navbar">
      <h2>📚 Book Store || Buy Book || Ishwar Books</h2>

      <div className="links">
        <Link to="/">Home</Link>

        <Link to="/favorites">
          ❤️ Favorites ({favoriteCount})
        </Link>

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

        {user ? (
          <span className="user">👤 {user}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar