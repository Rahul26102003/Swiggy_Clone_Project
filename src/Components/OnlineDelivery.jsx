import React from "react";
import { useState,useEffect } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    
    const fetchToprestaurant = async () => {
        const response = await fetch("http://127.0.0.1:5500/swiggy/data/toprestara.js");
        const apiData = await response.json();
        setData(apiData);
    }
    useEffect (
        () => {
            fetchToprestaurant();
        }, []
    )
    return (
        <div className='max-w-[1200px] mx-auto items-center'>
          <div className='flex items-center my-3 justify-between'>
            <div className='text-[25px] font-bold pt-5'>
                Restaurants with online food delivery in Hisar
            </div><br/>
          </div>
          <div className="grid grid-cols-4 gap-3">
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