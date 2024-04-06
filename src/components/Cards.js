import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-center justify-center '>
      {
        filteredItems.map((item) => {
            return <div key={item.id} className='shadow-md' >
                <Link to={`/shop/${item.id}`}>
                    <img src={item.image} alt="image" className='h-96 w-full hover:scale-105 transition-all duration-300' />
                </Link>
                <div className='mt-4 px-4'>
                    <strong className='text-base mb-2'>{item.title}</strong>
                    <div className='flex items-center justify-between mb-2'>
                        <p className='text-black/50'>{item.category}</p>
                        <p className='font-semibold'>${item.price}</p>
                    </div>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Cards
