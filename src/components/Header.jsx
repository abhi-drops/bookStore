import React from 'react'
import { IoMdBookmarks } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className=' w-screen h-16 '>

        <Link to={"/"}>
        <p  className='text-3xl font-bold text-emerald-400'> <span className='flex items-center ms-10 pt-4'><IoMdBookmarks/>Book Store</span> </p>
        </Link>
      </div>
    </>
  )
}

export default Header