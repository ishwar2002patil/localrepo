import { useEffect, useState } from "react";
import "./Bookcard.css";

function Bookcard({ book }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Like count
    const isLiked = fav.some((item) => item.id === book.id);
    setLiked(isLiked);
    setLikeCount(isLiked ? 1 : 0);

    // Cart count
    const cartItem = cart.find((item) => item.id === book.id);
    setCartCount(cartItem ? cartItem.quantity : 0);
  }, [book.id]);

  // ❤️ Like
  const addFavorite = () => {
    let fav = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = fav.some((item) => item.id === book.id);

    if (!exists) {
      fav.push(book);
      localStorage.setItem("favorites", JSON.stringify(fav));
      setLiked(true);
      setLikeCount(1);
      window.dispatchEvent(new Event("favoritesUpdated"));
    }
  };

  // 🛒 Add to Cart
  const addCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.findIndex((item) => item.id === book.id);

    if (index !== -1) {
      cart[index].quantity += 1;
      setCartCount(cart[index].quantity);
    } else {
      cart.push({ ...book, quantity: 1 });
      setCartCount(1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="card">
      <img src={book.image} alt={book.title} />

      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <h4>₹{book.price}</h4>

      {/* ❤️ Like with number */}
      <button onClick={addFavorite} className="heart-btn">
        {liked ? "❤️" : "🤍"} ({likeCount})
      </button>

      {/* 🛒 Cart with number */}
      <button onClick={addCart} className="cart-btn">
        🛒 Add to Cart ({cartCount})
      </button>
    </div>
  );
}

export default Bookcard;