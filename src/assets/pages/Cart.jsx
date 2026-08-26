import { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [location, setLocation] = useState("");

  // Load Cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // Save Cart
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase Quantity
  const increaseQty = (id) => {
    const updated = cart.map((book) =>
      book.id === id
        ? { ...book, quantity: book.quantity + 1 }
        : book
    );
    updateCart(updated);
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    const updated = cart
      .map((book) =>
        book.id === id
          ? { ...book, quantity: book.quantity - 1 }
          : book
      )
      .filter((book) => book.quantity > 0);

    updateCart(updated);
  };

  // Remove Book
  const removeCart = (id) => {
    const updated = cart.filter((book) => book.id !== id);
    updateCart(updated);
  };

  // Total Books Count
  const totalBooks = cart.reduce(
    (sum, book) => sum + book.quantity,
    0
  );

  // Grand Total Price
  const totalPrice = cart.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0
  );

  // Checkout
  const buyBooks = () => {
    if (name.trim() === "" || card.trim() === "" || location.trim() === "") {
      alert("Please fill all details.");
      return;
    }

    alert("🎉 Books bought successfully! Thank you for shopping.");

    localStorage.removeItem("cart");
    setCart([]);
    setName("");
    setCard("");
    setLocation("");
  };

  return (
    <div className="cart-page">

      <h2>🛒 Shopping Cart</h2>

      <h3>Total Books: {totalBooks}</h3>

      {/* User Details */}
      <div className="user-form">

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Card Number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Delivery Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

      </div>

      {/* Cart Books */}
      <div className="cart-container">

        {cart.length > 0 ? (
          cart.map((book) => (
            <div key={book.id} className="cart-card">

              <img src={book.image} alt={book.title} />

              <h3>{book.title}</h3>

              <p>Author: {book.author}</p>

              <p>Price: ₹{book.price}</p>

              {/* Quantity */}
              <div className="qty-box">

                <button onClick={() => decreaseQty(book.id)}>
                  −
                </button>

                <span>{book.quantity}</span>

                <button onClick={() => increaseQty(book.id)}>
                  +
                </button>

              </div>

              {/* Total Price for One Book */}
              <p>
                Total: <b>₹{book.price * book.quantity}</b>
              </p>

              <button
                className="remove-btn"
                onClick={() => removeCart(book.id)}
              >
                Remove
              </button>

            </div>
          ))
        ) : (
          <h2>Your Cart is Empty 📚</h2>
        )}

      </div>

      {/* Grand Total */}
      {cart.length > 0 && (
        <>
          <h2>Total Price: ₹{totalPrice}</h2>

          <button className="buy-btn" onClick={buyBooks}>
            Checkout
          </button>
        </>
      )}

    </div>
  );
}

export default Cart;