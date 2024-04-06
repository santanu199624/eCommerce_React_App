import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const SingleProductPage = () => {
    const {id} = useParams()
    // console.log(id)
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async() => {
          try{
            const response = await fetch("/products.json")
            const data = await response.json()
            const product = data.filter((p) => p.id == id)
            // console.log(product)
            setProducts(product[0])
            // setFilteredItem(data)
          } catch(error){
            console.log("Error fetching data:", error)
          }
        }
        fetchData()
        
      }, [id])

      const {title, category, price, image, status} = products

  return (
    <div className=' mt-28 max-w-screen-2xl container md:px-28 px-4'>
        <div className=' p-3 max-w-7xl m-auto'>
            <div>
                <a href="/" className='text-gray-500'>Home</a>
                <a href="/shop" className='font-bold text-black'> / Shop</a>
            </div>
            <div className='mt-6 sm:mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 
                sm:grid-cols-2 gap-6 h-max'>
                    {/* Product image */}
                    <div>
                        <img src={image} alt="" />
                    </div>
                    {/* Product Details */}
                    <div className='mt-4'>
                        <h1>{title}</h1>
                        <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit enim quibusdam laboriosam cum reiciendis eligendi soluta maiores quas nemo officia?</p>
                        <span className='flex flex-row items-center mt-4 
                        gap-2 text-yellow-500 text-2xl'>
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </span>
                        <p className='text-xl text-red-500 
                        font-semibold sm:text-2xl mt-4'>Price: ${price}</p>
                    </div>
                    <div className='mt-4'>
                        <div className='text-left flex flex-col gap-2 
                        w-full'>
                            <label className='font-semibold'>Quantity</label>
                            <input type="number" name='price' id='price'
                            defaultValue={1} required
                             className='border border-gray-400 text-sm 
                             font-semibold mb-1 max-w-full w-full 
                             outline-none rounded-md m-0 py-3 px-4 md:py-3 
                             md:px-4 focus:border-red-500'
                            />
                        </div>
                        <div className='text-left w-full my-4'> 
                            <button className='flex items-center 
                            justify-center gap-2 w-full py-3 px-4 
                            bg-red-500 text-white font-bold border 
                            border-red-500 rounded-md ease-in-out 
                            duration-150 shadow-slate-600 hover:bg-white 
                            hover:text-red-500 lg:m-0 md:px-6 '>
                                <span>Confirmed Order</span>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SingleProductPage
