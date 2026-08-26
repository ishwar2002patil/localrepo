import { useEffect, useState } from "react";
import "./Favorites.css";

function Favorites() {
  const [fav, setFav] = useState([]);

  // Load Favorites
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFav(data);
  }, []);

  // Remove Favorite Book
  const removeBook = (id) => {
    const updated = fav.filter((book) => book.id !== id);

    setFav(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));

    // Home page count update
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className="favorites-page">
      <h2>❤️ Favorite Books</h2>

      {/* Total Favorite Count */}
      <h3>Total Favorites: {fav.length}</h3>

      <div className="favorites-container">
        {fav.length > 0 ? (
          fav.map((book) => (
            <div key={book.id} className="favorite-card">
              <img src={book.image} alt={book.title} />

              <h3>{book.title}</h3>

              <p>{book.author}</p>

              <h4>₹{book.price}</h4>

              {/* Like Number */}
              <button className="heart-btn">
                ❤️ (1)
              </button>

              <button
                className="remove-btn"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h2>No Favorite Books Yet ❤️</h2>
        )}
      </div>
    </div>
  );
}

export default Favorites;