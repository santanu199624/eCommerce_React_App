import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../images/category/image1.png"
import image2 from "../images/category/image2.png"
import image3 from "../images/category/image3.png"
import image4 from "../images/category/image4.png"
import image5 from "../images/category/image5.png"

const companyLogo = [
  {id: 1, img: require("../../src/images/company/brand1.png")},
  {id: 2, img: require("../../src/images/company/brand2.png")},
  {id: 3, img: require("../../src/images/company/brand3.png")},
  {id: 4, img: require("../../src/images/company/brand4.png")},
  {id: 5, img: require("../../src/images/company/brand5.png")},
]
const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      {/* Company Logo */}
      <div className='flex items-center justify-around flex-wrap gap-5'>
        {
            companyLogo.map(({id, img}) => {
                return <div key={id} className='border border-green-900'>
                    <img src={img} alt="" />
                </div>
            })
        }
      </div>

      {/* Category Grid */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex md:-rotate-90'>Explore new and popular styles</p>
        <div>
          <Link to="/"><img src={image1} alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
        </div>
        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-4'>
              <Link to="/"><img src={image2} alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
              <Link to="/"><img src={image3} alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
              <Link to="/"><img src={image4} alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
              <Link to="/"><img src={image5} alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
