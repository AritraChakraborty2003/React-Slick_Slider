import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFC300" ,width:"30px", height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFC300",width:"30px", height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
 
  <div className='w-12/12 h-70 pb-2 hidden lg:block'>
    <Slider {...settings} className='pb-5'>
      
    <div className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-500 rounded-lg shadow-lg  transform transition duration-300 
                                hover:scale-110">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
<div className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg   transform transition duration-300 
                                hover:scale-110 ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
<div className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
<div className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
        
    <div className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
         
    <div className="max-w-[230px] max-h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
    </Slider>

</div>

<div className='bookHolder lg:hidden flex flex-wrap gap-5 justify-center items-center'>
<div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
<div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg   transform transition duration-500 
                                hover:scale-110">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
<div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
<div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
        
    <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
         
    <div className="w-[250px] h-[290px] pt-3 bg-white border-solid border-gray-100 rounded-lg shadow-lg ">
    <a href="#" className='w-12/12 flex justify-center'>
        <img className="rounded-t-lg" src="./images/5am.jpg" alt="" width={75} height={60}/>
    </a>
    <div class="p-5">
        <a href="#">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">The 5AM Club</p>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Author: Robin Sharma</p>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Price: Rs 900
          </p>
          <button type="button" class="focus:outline-none text-black bg-mustardyellow hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 mb-2">Add To Cart</button>
    </div>
   
</div>
</div>
</>
  )
}

export default App
