import React from 'react'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import FavourableDietList from './dietlist'

const Home = () => {
  return (
    <div>
        <Layout />
        <Featured />
        <FavourableDietList />
    </div>
  )
}

export default Home