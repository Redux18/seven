import React ,{useState,useEffect} from 'react'
import Header from '../../components/header/Header'
import Category from '../../components/header/category/Category'
import Card from '../../components/header/blog/Card'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const Home = () => {

  const [posts, setPosts] = useState([])

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
  
    <>
    {/* <Header/> */}
    <Category/>
    {/* <Card/> */}
    <Card posts={posts} />
    </>
  )
}

export default Home