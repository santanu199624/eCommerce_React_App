import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BestSeller = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(`products.json`)
            const data = await res.json()
            // console.log(data)
            setProducts(data)
        }
        fetchData()
    }, [])

    const bestSeller = products.filter((item) => item.status === "Best Selers")
    // console.log(bestSeller)

  return (
    <div className="max-w-screen-2xl mx-auto md:px-28 px-4">
        <div className="text-center">
                <h2 className="uppercase font-bold">Best Seller</h2>
                <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-3 
                 mt-3">Lorem ipsum, dolor sit amet  
                 consectetur adipisicing elit. Nam accusamus beatae officiis  
                ducimus asperiores veritatis?</p>
      </div>
      {/* Best seller product */}
      <div className="mb-16">
      <Swiper
      slidesPerView={4}
        spaceBetween={20}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            512: {
              slidesPerView: 1,
              spaceBetween: 20,
              },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            bestSeller.map((product) => {
                return(
                    <SwiperSlide key={product.id}>
                        <div className='rounded-t-md'>
                        <Link to={`/shop/${product.id}`}>
                    <img src={product.image} alt="image" className='h-60 
                    w-full hover:scale-105 transition-all duration-300
                     rounded-t-md' />
                </Link>
                <div className='mt-4 px-4'>
                    <strong className='text-base mb-2'>{product.title}  
                     </strong>
                    <div className='flex items-center justify-between mb-2'>
                        <p className='text-black/50'>{product.category}</p>
                        <p className='font-semibold'>${product.price}</p>
                    </div>
                </div>
                </div>
                    </SwiperSlide>
                )
            })
        }
        
      </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
