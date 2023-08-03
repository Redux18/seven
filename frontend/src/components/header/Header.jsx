import React ,{useContext} from 'react'
import "./header.css"
import logo from '../../assets/images/logo.svg'
import  {Link} from 'react-router-dom'
import{ nav} from "../../assets/data/data"
import User from "./User"


const Header = () => {


    window.addEventListener("scroll",function(){
        const header= this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY>100)
    })
  return (
    <>
    <header className='header'>
    <div className="scontainer flex">


        <div className="logo">
            <img src={logo} alt='logo' width='100px'/>
        </div>
        <nav>


            <ul>
                {nav.map((link)=>(
                    <li key={link.id}>
                        <Link to={link.url}>
                            {link.text}</Link>
                            </li>

                ))}

            </ul>
        </nav>
        <div className="accont flexCenter">
            <User/>
        </div>


    </div>

    </header>
    <section></section>
    </>
  )
}

export default Header