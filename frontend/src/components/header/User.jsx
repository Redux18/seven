import React, { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import {RiImageAddLine} from "react-icons/ri"
import {IoSettingsOutline} from "react-icons/io5"
import {BsBagCheck} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {GrHelp} from "react-icons/gr"
import {BiLogOut} from "react-icons/bi"
import prt from '../../assets/images/input.png'
import { Context } from "../../context/Context"
import Account from '../../pages/home/account/Account'


const User = () => {
    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
      }

    // const user =true
    const [profileOpen,setProfileOpen]=useState(true)

    const close=()=>{
        setProfileOpen(true)
    }

    const PublicFlo = "http://localhost:5000/images/"

  return (
    <>
    
    <div className="profile">
        {user ?(
             <>
              <button className="img" onClick={()=>setProfileOpen(!profileOpen)}>
              {/* <img src={prt} alt='images'/> */}
              <img src={PublicFlo + user.profilePic} alt='' />
          </button>
        {/* )} */}
        {profileOpen && (
        

      

        <div className="openProfile boxItems" onClick={()=>close()}>

            <Link to='/account'>
                <div className="image">
                    <div className="img">
                        {/* <img src={prt} alt='images' /> */}
                        <img src={PublicFlo + user.profilePic} alt='' />
                    </div>
                    <div className="text">
                    <h4>{user.username}</h4>
                        {/* <h4>Eden Smith</h4> */}
                        <p>Los Angels,CA</p>
                    </div>
                </div>
            </Link>
            <Link to='/create'>
                <button className='box'>
                    <RiImageAddLine  className='icon'/>
                    {/* <IoSettingsOutline className='icon' /> */}
                    <h4>Create Post</h4>
                </button>

            </Link>
            <button className='box'>
                    {/* <RiImageAddLine/> */}
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                </button>
                <button className='box'>
                    {/* <RiImageAddLine/> */}
                    <BsBagCheck className='icon' />
                    <h4>My Order</h4>
                </button>

                <button className='box'>
                    {/* <RiImageAddLine/> */}
                    <AiOutlineHeart className='icon' />
                    <h4>Wishlist</h4>
                </button>
                <button className='box'>
                    {/* <RiImageAddLine/> */}
                    <GrHelp className='icon' />
                    <h4>Help</h4>
                </button>
                <button className='box'onClick={handleLogout}>
                    {/* <RiImageAddLine/> */}
                    <BiLogOut className='icon' />
                    <h4>Log Out</h4>
                </button>
        </div>
        )}

        </>
        ):(<Link to ="/login"><button>My account</button></Link>)}
    </div>
    
    
    </>
  

  )
}

export default User