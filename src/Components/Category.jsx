import React, { useEffect } from 'react';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { useState } from 'react';
export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
        const response = await fetch("http://127.0.0.1:5500/data/categories.js");
        const data = await response.json();
        setCategory(data);

    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () => {
        if(categories.length - 8 === slide) {
            return false;
        }
        setSlide(slide + 3);  
    }

    const prevSlide = () => {
        if(slide === 0) {
            return false;
        }
        setSlide(slide - 3);
    }
    return (
        <>
        <div className='max-w-[1500px] mx-auto items-center'>
          <div className='flex items-center my-3 justify-between'>
            <div className='text-[25px] ps-2 font-bold'>
                What's on your mind?
            </div>
            <div className='flex md:gap-4'>
                <div className='cursor-pointer text-[25px] flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><HiArrowSmLeft onClick={prevSlide}/></div>
                <div className='cursor-pointer text-[25px] flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><HiArrowSmRight onClick={nextSlide}/></div>
            </div>
          </div>
          <div className='category flex overflow-scroll overflow-hidden'>
            {
                categories.map(
                    (categories, index) => {
                        return (
                            <div style={{
                                transform: `translateX(-${slide * 100}%)`
                            }}
                            key={index} className='w-[150px] shrink-0 duration-500'> 
                                <img src={"http://127.0.0.1:5500/" + categories.image} alt="" />
                            </div>
                        )
                    }
                )
            }
          </div>
          <hr className='my-6 border-[1px]'/>
        </div>
        </>
    );

}