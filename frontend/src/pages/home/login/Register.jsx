import React,{useState} from 'react'
import {Link}  from 'react-router-dom'
import back from "../../../assets/images/my-account.jpg"
import './login.css'
import axios from "axios"

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setError(false)
      try {
        const res = await axios.post("/auth/register", {
          username,
          email,
          password,
        })
        res.data && window.location.replace("/login")
      } catch (error) {
        setError(true)
      }
    }
  return (
    <>
    
    <section className='login'>
        <div className="conatiners">
            <div className="backImg">
                <img src={back} alt=''/>
                <div className="text">
                    <h3>Register</h3>
                    <h1>My Account</h1>

                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <span>email address</span>
                <input type='email'  required onChange={(e) => setEmail(e.target.value)}  />
                <span>Username</span>
                <input type='text'  required onChange={(e) => setUsername(e.target.value)} />
                <span>Password</span>
                <input type='password' required  onChange={(e) => setPassword(e.target.value)}/>

                <button className='button'>Register</button>
                {/* <Link to="/login">LogIn</Link> */}


            </form>
            {error && <span>Someting went wrong</span>}
        </div>
    </section>
    
    
    </>
  )
}

export default Register