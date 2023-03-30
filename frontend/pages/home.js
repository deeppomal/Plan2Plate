import React from 'react'
import Featured from '../components/Featured'
import { NavbarNew } from '../components/NavbarNew'
import FavourableDietList from './dietlist'

const Home = () => {
  return (
    <div>
        <NavbarNew />
        <Featured />
        <FavourableDietList />
    </div>
  )
}

export default Home