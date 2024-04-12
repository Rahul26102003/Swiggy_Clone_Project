import React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    const [isAtTop, setIsAtTop] = useState(false);

    const componentRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if(componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect();
          setIsAtTop(rect.top <= 0);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
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
    return (
        <div className='max-w-[1200px] mx-auto items-center px-2' ref={componentRef}>
          <div className='flex items-center my-3 justify-between'>
            <div className='text-[25px] font-bold pt-5'>
                Restaurants with online food delivery in Chandigarh
            </div>
          </div>
          <div className={isAtTop ? 'fixed top-0 z-[99999999] bg-white w-full left-0' : ''}>
            <div className="max-w-[1200px] mx-auto flex my-4 gap-3 cursor-pointer">
            <div className="p-3 rounded-md shadow">Filter</div>
            <div className="p-3 rounded-md shadow">Sort By</div>
            <div className="p-3 rounded-md shadow">Fast Delivery</div>
            <div className="p-3 rounded-md shadow">New on Swiggy</div>
            <div className="p-3 rounded-md shadow">Rating 4.0+</div>
            <div className="p-3 rounded-md shadow">Pure Veg</div>
            <div className="p-3 rounded-md shadow">Offers</div>
            <div className="p-3 rounded-md shadow">Rs.300-Rs.600</div>
            <div className="p-3 rounded-md shadow">Less than Rs.300</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
                data.map(
                  (d, i) =>  {
                    return <Card {...d} key={i} />
                }
                )
            }
          </div>
        </div>

    )
}