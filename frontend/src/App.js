import React, { useContext } from "react"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./pages/home/Home"
import Header from "./components/header/Header";
// import Details from "./pages/home/details/Details";
import Account from "./pages/home/account/Account"
import Login from "./pages/home/login/Login";
import Register from "./pages/home/login/Register";
import Create from "./components/header/create/Create";
import Footer from "./components/header/footer/Footer";
import { Context } from "./context/Context";
import  DetailsPages  from "./pages/home/details/DetailsPages"


function App() {
  //After login
  const{user} =useContext(Context)
  return (
   <>
   
   
   {/* <h1>Hello</h1> */}

   <Router>
    <Header/>


       <Routes>

      <Route exact path="/" Component={Home} />
      <Route exact path="/login" Component={Login} />
      
      <Route exact path="/register" Component={Register} />
      <Route exact path="/post/:id" Component={DetailsPages} />
      <Route exact path="/account" Component={Account} />
      
      
      <Route exact path="/create" Component={Create} />

      {/* <Route exact path="/details/:id" Component={Details} /> */}


      {/* <Route path="/" element={<Home />} /> */}



       </Routes>
       <Footer />


   </Router>
   </>
  );
}

export default App;
