import React from 'react'
import { Link } from 'react-router'

const MainCategories = () => {
    return (
        <div className='hidden md:flex bg-white rounded-3xl shadow-lg xl:rounded-full  p-4 items-center justify-center gap-8'>
            {/* links */}
            <div className='flex-1 flex items-center justify-between flex-wrap'>
                <Link to="/posts" className='bg-orange-500 cursor-pointer hover:bg-orange-600 transition-all duration-300 text-white px-4 py-2 rounded-full'>
                    All Posts
                </Link>
                <Link to="/posts?cat=web-development" className='cursor-pointer hover:bg-orange-100 transition-all duration-300px-4 py-2 rounded-full'>
                    Web Development
                </Link>
                <Link to="/posts?cat=development" className='cursor-pointer hover:bg-orange-100 transition-all duration-300 px-4 py-2 rounded-full'>
                    Development
                </Link>
                <Link to="/posts?cat=database" className='cursor-pointer hover:bg-orange-100 transition-all duration-300  px-4 py-2 rounded-full'>
                    Database
                </Link>
                <Link to="/posts?cat=seo" className='cursor-pointer hover:bg-orange-100 transition-all duration-300  px-4 py-2 rounded-full'>
                    SEO
                </Link>
                <Link to="/posts?cat=marketing" className='cursor-pointer hover:bg-orange-100 transition-all duration-300  px-4 py-2 rounded-full'>
                    Marketing
                </Link>
            </div>

            <span className='hidden md:inline-block border-l border-gray-400 h-5' />

            {/* search */}
            <div className='bg-gray-100 flex items-center px-2 gap-2 rounded-full'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox='0 0 24 24'
                    width="20"
                    height="20"
                    fill='none'
                    stroke='gray'
                >
                    <circle cx="10.5" cy="10.5" r="7.5" />
                    <line x1="16.5" y1="16.5" x2="22" y2="22" />

                </svg>

                <input type="text" placeholder='Search...' className='bg-transparent outline-none p-2' />

            </div>
        </div>
    )
}

export default MainCategories