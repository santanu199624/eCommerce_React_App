import React from 'react'
import { Link } from 'react-router-dom'

const NewsLatter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
      <h2 className='mb-8 text-center font-semibold text-2xl'>Follow products and discounts on Instagram</h2>
      {/* Insta images */}
      <div className='flex items-center justify-center gap-3 flex-wrap'>
        <Link to="/">
            <img className='w-40 h-40' src="https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Link>
        <Link to="/">
            <img className='w-40 h-40' src="https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Link>
        <Link to="/">
            <img className='w-40 h-40' src="https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Link>
        <Link to="/">
            <img className='w-40 h-40' src="https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Link>
        <Link to="/">
            <img className='w-40 h-40' src="https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Link>
        <Link to="/">
            <img className='w-40 h-40' src="https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Link>
        
      </div>
      {/* newslatter */}
      <div className='mt-8'>
        <h2 className='mb-8 text-center font-semibold text-2xl'>Or Subscribe to the Newslatter</h2>
        <form className='md:w-1/2 mx-auto text-center'>
            <input type="email" name='email' id='email' placeholder='Email Address...' className='h-8 bg-transparent outline-none border-b-2 border-black md:w-2/3 w-full mb-5 mr-4' />
            <button className='bg-red-500 text-white font-bold border 
                            border-red-500 rounded-md ease-in-out 
                            duration-150 shadow-slate-600 hover:bg-white 
                            hover:text-red-500 lg:m-0 md:px-6 py-2'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLatter
