import { useState } from "react";
import books from "../../data/books";
import Bookcard from "../component/bookcard";
import "./Home.css"

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">

      <form onSubmit={handleSearch} className="search-form">

        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>

      </form>

      <div className="books-grid">

        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Bookcard key={book.id} book={book} />
          ))
        ) : (
          <h2 className="no-results">No books found</h2>
        )}

      </div>

    </div>
  );
}

export default Home;