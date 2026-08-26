import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./assets/pages/Cart"; 
import Navbar from "./assets/component/Navbar";
import Footer from "./assets/pages/Footer";
import Home from "./assets/pages/Home";
import Favorites from "./assets/pages/Favorites";
import Login from "./assets/pages/login";

function App() {

  const [user,setUser] = useState(localStorage.getItem("user"));

  return (
    <div>
      <Navbar user={user}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;