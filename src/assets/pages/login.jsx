import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // Save user
    localStorage.setItem("user", name);
    localStorage.setItem("email", email);

    setUser(name);

    // Clear inputs
    setName("");
    setEmail("");

    // Go to Home page automatically
    navigate("/");
  };

  return (
    <div className="login">
      <form onSubmit={login} className="box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;