import React,{useState,useEffect} from 'react'
import { category } from '../../../assets/data/data'
import "./category.css"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {MdNavigateNext} from "react-icons/md"
import {GrFormPrevious} from "react-icons/gr"
import axios from "axios"
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom"

const SampleNextArrow= (pros)=>{
    const {onClick}=pros
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <MdNavigateNext  className='icons'/>
                {/* <GrFormPrevious  className='icons'/> */}
            </button>
        </div>
    )
}
const SamplePrevArrow= (pros)=>{
    const {onClick}=pros
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <GrFormPrevious  className='icons'/>
            </button>
        </div>
    )
}
 

const Category = () => {
     
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow/>,
          prevArrow: <SamplePrevArrow/>,
          responsive:[{
            breakpoint:800,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,

            }
          }]
        };

        const [cats,setCat] =useState([])
        const {search} =useLocation()

        useEffect(()=>{
            const getCat =async()=>{
                const res = await axios.get("/category"+search)
                setCat(res.data)
            }
            getCat()
        },[search])
  return (
    <>
    <section className='category'>
        <div className="content">
        <Slider {...settings}>
            {
                category.map((item)=>(
                    <div className="boxs" key={item.id}>
                        <div className="box">
                            <img src={item.cover} alt=''/>
                        
                        <div className="overlay">
                        <Link to={`/?cat=${item.name}`} className='link'>   
                            <h4>{item.category}</h4>
                            </Link>
                            <p>{item.title}</p>
                        </div></div>

                    </div>
                ))
            }
             </Slider>
        </div>



    </section>
    </>
  )
}

export default Category