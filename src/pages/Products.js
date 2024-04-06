import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import Cards from '../components/Cards';

const Products = () => {
  const [product, setProduct] = useState([])
  const [filteredItem, setFilteredItem] = useState([])
  const [selectedCategory, setselectedCategory] = useState("all")
  const [sortOption, setSortOption] = useState("Default")

  
  

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch("products.json")
        const data = await response.json()
        setProduct(data)
        setFilteredItem(data)
        // console.log(data)
      } catch(error){
        console.log("Error fetching data:", error)
      }
    }
    fetchData()
    
  }, [])

  // Filtering function
  const filterItem = (category) => {
      const filtered = category === "all" ? (product) : product.filter((item) => item.category === category)

      setFilteredItem(filtered)
      setselectedCategory(category)
  }

  // Show all product
  const showAll = () => {
    setFilteredItem(product)
    // selectedCategory("all")
  }

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28 '>
      <h2 className='title'>Or Subscriber to the Newslatter</h2>
      {/* Products Card */}
      <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
        {/* Types of Products */}
        <div className=' flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap '>
            <button onClick={showAll} className='hover:text-orange-500'>All Products</button>
            <button onClick={() => filterItem("Dress")} className='hover:text-orange-500'>Clothing</button>
            <button onClick={() => filterItem("Hoodies")} className='hover:text-orange-500'>Hoodies</button>
            <button onClick={() => filterItem("Bag")} className='hover:text-orange-500'>Bag</button>
        </div>
        {/* Filter Icons */}
        <div className='flex items-center justify-end px-2 gap-2'>
          <div>
            <FaFilter className='cursor-pointer hover:scale-150 transition-all duration-200 ' />
          </div>
          <div>
            <select className='bg-black text-white'>
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      {/* Cards */}
        <Cards filteredItems={filteredItem} />
    </div>
  )
}

export default Products
