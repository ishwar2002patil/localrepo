import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({user}){

  return(
    <nav className="navbar">

      <h2>📚 Book Store</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>

        {user ? (
          <span className="user">👤 {user}</span>
        ):(
          <Link to="/login">Login</Link>
        )}

      </div>

    </nav>
  )
}

export default Navbar