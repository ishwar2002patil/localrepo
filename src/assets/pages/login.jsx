import { useState } from "react"
import "./Login.css"

function Login({setUser}){

  const [name,setName] = useState("")

  const login = (e)=>{
  

    localStorage.setItem("user",name)

    setUser(name)
  }

  return(

    <div className="login">

      <form onSubmit={login} className="box">

        <h2>Login</h2>

        <input
        type="text"
        placeholder="Enter name"
        onChange={(e)=>setName(e.target.value)}
        />
        <input type="text"
        placeholder="Enter email" 
        />

        <button type="submit" >Login</button>

      </form>

    </div>

  )
}

export default Login