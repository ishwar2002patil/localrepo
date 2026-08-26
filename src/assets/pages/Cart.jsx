import { useEffect, useState } from "react"
import "./Cart.css"

function Cart(){

  const [cart,setCart] = useState([])
  const [name,setName] = useState("")
  const [card,setCard] = useState("")
  const [location,setLocation] = useState("")

  const price = 1000

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("cart")) || []
    setCart(data)
  },[])

  const removeCart = (index) => {
    const updated = cart.filter((_,i)=> i !== index)
    setCart(updated)
    localStorage.setItem("cart",JSON.stringify(updated))
  }

  const total = cart.length * price

  const buyBooks = () => {

    if(name === "" || card === "" || location === ""){
      console.log("Please fill all details")
      return
    }

    alert("Books bought successfully... Thank you for buying!")

    localStorage.removeItem("cart")
    setCart([])
  }

  return(
    <div className="cart-page">

      <h2>Buy Books</h2>

      {/* User Details */}
      <div className="user-form">

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Card Number"
          value={card}
          onChange={(e)=>setCard(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Delivery Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

      </div>

      {/* Cart Books */}
      <div className="cart-container">

        {cart.map((book,index)=>(
          
          <div key={index} className="cart-card">

            <img src={book.image} alt={book.title} />

            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <p>Price: ₹{price}</p>

            <button onClick={()=>removeCart(index)}>
              Remove
            </button>

          </div>

        ))}

      </div>

      {/* Total */}
      <h3>Total Price: ₹{total}</h3>

      <button className="buy-btn" onClick={buyBooks}>
        Checkout
      </button>

    </div>
  )
}

export default Cart