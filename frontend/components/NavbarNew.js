import React from 'react'
import Link from 'next/link'
import Image from "next/legacy/image";

export const NavbarNew = () => {
  return (
    <div className='fixed top-0 z-40 flex bg-white shadow-md w-full justify-between items-center px-5  py-2 sm-px-1'>
        <div >
            <img  className=" ml-10 h-24 w-15"
        src="img/logo.png"
         alt="" />
            {/* <p className='font-bold text-xl font-mono'>Plan2Plate</p> */}
        </div>
        <div className='flex '>
            <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer text-rose-900 sm-text-xs'>
                    Home
                </p>
            </Link>
            {/* <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer'>
                    Favourable Diets
                </p>
            </Link> */}
            <Link href="/blog">
                <p className='font-semibold mx-4 cursor-pointer text-rose-900 sm-text-xs '>
                    Blogs
                </p>
            </Link>
            <Link href="/favoriterecipes">
                <p className='font-semibold mx-4 cursor-pointer text-rose-900 sm-text-xs '>
                Favorite Recipes
                </p>
            </Link>
            <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer text-rose-900 sm-text-xs'>
                    Company
                </p>
            </Link>
             <Link href="/aboutus">
                <p className='font-semibold mx-4 cursor-pointer text-rose-900 sm-text-xs'>
                    About us
                </p>
            </Link>
            <Link href="/contactus">
                <p className='font-semibold mx-4 cursor-pointer text-rose-900 sm-text-xs'>
                    Contact
                </p>
            </Link>
        </div>
        <div>
            <Link href="/">
                <div className='bg-rose-900 px-5 py-2 rounded-lg cursor-pointer hover:bg-rose-600'>
                    <p className='text-white font-semibold'>
                        Logout
                    </p>
                </div>
            </Link>
        </div>
    </div>
  )
}

// home , fav diets, blogs, company, contact, logout
