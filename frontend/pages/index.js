import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import FavourableDietList from './dietlist'
import { Login } from '../components/Login'


export default function Home() {
  return (
    <div className="h-screen">
      <Login />
    </div> 
  );
}
