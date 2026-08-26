import { useState } from "react"
import "./Bookcard.css"

function Bookcard({book}){

  const [liked,setLiked] = useState(false)

  // Add to Favorites
  const addFavorite = () => {

    let fav = JSON.parse(localStorage.getItem("favorites")) || []

    const alreadyExists = fav.some((item) => item.title === book.title)

    if(!alreadyExists){
      fav.push(book)
      localStorage.setItem("favorites", JSON.stringify(fav))
      setLiked(true)
      console.log("Book added to favorites")
    }else{
      setLiked(true)
      console.log("Book already in favorites")
    }
  }


  // Add to Cart
  const addCart = () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    const alreadyExists = cart.some((item) => item.title === book.title)

    if(!alreadyExists){
      cart.push(book)
      localStorage.setItem("cart", JSON.stringify(cart))
     console.log ("Book added to cart")
    }else{
     console.log ("Book already in cart")
    }
  }

  return(
    <div className="card">

      <img src={book.image} alt={book.title} />

      <h3>{book.title}</h3>

      <p>{book.author}</p>

      <button onClick={addFavorite} className="heart-btn">
        {liked ? "❤️" : "🤍"}
      </button>

      <button onClick={addCart} className="cart-btn">
        Add to Card
      </button>

    </div>
  )
}

export default Bookcard