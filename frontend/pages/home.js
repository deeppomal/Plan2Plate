import React from 'react'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import { NavbarNew } from '../components/NavbarNew'
import FavourableDietList from './dietlist'
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        {/* <Layout /> */}
        <NavbarNew />
        <Featured />
      <FavourableDietList />
      <Footer/>
      
    </div>
  )
}

export default Home