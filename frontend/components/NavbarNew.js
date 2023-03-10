import React from 'react'
import Link from 'next/link'

export const NavbarNew = () => {
  return (
    <div className='fixed top-0 z-40 flex bg-white shadow-md w-full justify-between items-center p-5 py-7'>
        <div>
            <p className='font-bold text-xl font-mono'>Plan2Plate</p>
        </div>
        <div className='flex'>
            <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer'>
                    Home
                </p>
            </Link>
            {/* <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer'>
                    Favourable Diets
                </p>
            </Link> */}
            <Link href="/blog">
                <p className='font-semibold mx-4 cursor-pointer'>
                    Blogs
                </p>
            </Link>
            <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer'>
                    Company
                </p>
            </Link>
            <Link href="/home">
                <p className='font-semibold mx-4 cursor-pointer'>
                    Contact
                </p>
            </Link>
        </div>
        <div>
            <Link href="/">
                <div className='bg-blue-600 px-5 py-2 rounded-lg cursor-pointer'>
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
