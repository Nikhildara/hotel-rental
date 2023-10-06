import { useContext, useEffect, useState } from 'react'
import './index.css'
import HotelItem from '../HotelItem'
import Header from "../Header"
import FilterSection from '../FilterSection'
import ContextCity from '../../Context/ContextCity'
import { GiSandsOfTime } from "react-icons/gi"


const Body=()=>{
    const [data,setData]=useState([])
    
    
    const cityCon=useContext(ContextCity)
    // console.log(cityCon);

    const {city,lastIndex,setLastIndex,setDataInContext}=cityCon
    console.log(lastIndex);

    let numberOfItem;
    

    const getData=()=>{
        fetch('hotelData.json',
        {
            headers:{
                'Content-Type':'application/json',
                'Accept':"application/json"
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then(function(myJson){
            setData(myJson)
        })
    }
    console.log(data);

    useEffect(()=>{
        getData()
    },[])

    setDataInContext(data)

    const filterData=data.filter((e)=>e.city===city)
    // console.log(filterData);

    numberOfItem=filterData.slice(0,lastIndex)
    console.log(numberOfItem);
 
    const getAllData=()=>{
        setLastIndex(9)
    }

    
    

    return(
        <>
            <Header/>
            <FilterSection/>
            
            <div className='body-con'>
                <ul className='body-items-con'>
                    {
                        numberOfItem.map((e)=> <HotelItem hotelListItem={e} key={e.id}/>)
                    }
                </ul>
            </div>
            <div className='butt-con'>
                <button className='show-more' onClick={getAllData}><GiSandsOfTime/> Show More</button>
            </div>
        </>
    )
}

export default Body