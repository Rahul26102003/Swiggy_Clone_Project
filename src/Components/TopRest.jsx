import React, { useEffect, useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import Card from './Card';
export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);
    
    const fetchToprestaurant = async () => {
        const response = await fetch("http://127.0.0.1:5500/data/toprestara.js");
        const apiData = await response.json();
        setData(apiData);
    }
    useEffect (
        () => {
            fetchToprestaurant();
        }, []
    )

    const nextSlide = () => {
        if(data.length - 8 === slide) {
            return false;
        }
        setSlide(slide + 4);  
    }
  
    const prevSlide = () => {
        if(slide === 0) {
            return false;
        }
        setSlide(slide - 4);
    }

    return (
        <>
        <div className='max-w-[1190px] ms-auto me-[395px] items-center'>
          <div className='flex items-center my-3 justify-between'>
            <div className='text-[25px] font-bold'>
                Top restaurarant chains in Hisar
            </div>
            <div className='flex gap-4'>
                <div className='cursor-pointer text-[25px] flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><HiArrowSmLeft onClick={prevSlide}/></div>
                <div className='cursor-pointer text-[25px] flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><HiArrowSmRight onClick={nextSlide}/></div>
            </div>
          </div>
        <div className='flex gap-7 overflow-hidden '>
            {
                data.map(
                    (data, index) => {
                        return (
                            <div className="shrink-0 duration-500" style={{transform: `translateX(-${slide * 100}%)`}}>
                                     <Card  {...data} key={index}/>
                            </div>
                        )
                    }
                )
            }
          </div>
        </div> 
        </>    
    )
}


