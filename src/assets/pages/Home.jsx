import { useState } from "react";
import books from "../../data/books";
import Bookcard from "../component/Bookcard";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Cart state
  const [cart, setCart] = useState([]);

  // Like state
  const [likedBooks, setLikedBooks] = useState([]);

  // Search Filter
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add To Cart
  const addToCart = (book) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === book.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...book,
          quantity: 1,
          totalPrice: book.price,
        },
      ];
    });
  };

  // Like / Unlike
  const toggleLike = (book) => {
    setLikedBooks((prev) => {
      const alreadyLiked = prev.find((item) => item.id === book.id);

      if (alreadyLiked) {
        return prev.filter((item) => item.id !== book.id);
      }

      return [...prev, book];
    });
  };

  // Total Cart Items
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="home">

      {/* Search Bar */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Search books by title..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {/* Top Info */}
      <div className="home-info">
        <h3 className="result-count">
          📚 {filteredBooks.length} Book
          {filteredBooks.length !== 1 ? "s" : ""} Found
        </h3>
      </div>

      {/* Books */}
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Bookcard
              key={book.id}
              book={book}
              addToCart={addToCart}
              toggleLike={toggleLike}
              liked={likedBooks.some((item) => item.id === book.id)}
              cartQty={
                cart.find((item) => item.id === book.id)?.quantity || 0
              }
            />
          ))
        ) : (
          <h2 className="no-results">📚 No books found.</h2>
        )}
      </div>
    </div>
  );
}

export default Home;