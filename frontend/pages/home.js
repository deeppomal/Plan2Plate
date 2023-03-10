import React from 'react'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import { NavbarNew } from '../components/NavbarNew'
import FavourableDietList from './dietlist'

const Home = () => {
  return (
    <div>
        {/* <Layout /> */}
        <NavbarNew />
        <Featured />
        <FavourableDietList />
    </div>
  )
}

export default Home