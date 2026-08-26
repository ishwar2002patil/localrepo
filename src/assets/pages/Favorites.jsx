import { useEffect, useState } from "react"
import "./Favorites.css"

function Favorites(){

  const [fav,setFav] = useState([])

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("favorites")) || []
    setFav(data)
  },[])

  const removeBook = (index) => {
    const updated = fav.filter((_,i)=> i !== index)
    setFav(updated)
    localStorage.setItem("favorites",JSON.stringify(updated))
  }

  return(
    <div className="favorites-page">

      <h2>Favorite Books</h2>

      <div className="favorites-container">

        {fav.map((book,index)=>(
          
          <div key={index} className="favorite-card">

            <img src={book.image} alt={book.title} />

            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <button onClick={()=>removeBook(index)}>
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Favorites