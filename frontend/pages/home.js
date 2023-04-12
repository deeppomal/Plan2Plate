import React from 'react'
import Featured from '../components/Featured'
import { NavbarNew } from '../components/NavbarNew'
import FavourableDietList from './dietlist'
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <NavbarNew />
        <Featured />
      <FavourableDietList />
      <Footer/>
      
    </div>
  )
}

export default Home