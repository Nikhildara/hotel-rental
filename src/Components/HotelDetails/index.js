import { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { IoBedOutline } from "react-icons/io5"
import { LiaBathSolid ,LiaArrowsAltSolid} from "react-icons/lia"
import ContextCity from '../../Context/ContextCity';

import './index.css'

const HotelDetails=()=>{
    
    const context=useContext(ContextCity)

    let {id}=useParams()
    console.log(id);
    console.log(context);

    // if (!context || !context.hotelData || !Array.isArray(context.hotelData.current)) {
    //     // Handle the case where data is not available yet
    //     return <div>Loading...</div>;
    // }

    const {hotelData}=context
    // console.log(hotelData);

    const {current}=hotelData

    

   console.log(hotelData);
        
    const detailsData=hotelData.find((e)=>e.id===parseInt(id))
    if (!detailsData) {
        // Handle the case where detailsData is not found
        return <div>Hotel details not found.</div>;
      }
    const {name,hotelImages,room,beds,bath,area,rent,location}=detailsData
    console.log(name,hotelImages,location,room,)
    console.log(current);

    return(
        <div className='details-con'>
            <h1 className=''>{name}</h1>
            <Carousel interval={3000}>   
                    {
                    hotelImages.map((e)=>
                    <Carousel.Item>
                    <img alt='hotel-img' src={e.img} className='img-item-details'/>
                    </Carousel.Item>)
                    } 
            </Carousel>
            <div className='location-con-details'>
                    <IoLocationOutline className='location-icon'/>
                    <span  className='location-des'>{location}</span>
            </div>
            <div className='details-icons-des-con'>
                <div className='details-icons-des-item'>
                    <HiOutlineBuildingOffice2/>
                    <p className=''>{room} Room</p>
                </div>
                <div className='details-icons-des-item'>
                    <IoBedOutline/>
                    <p className=''>{beds} Bed</p>
                </div>
                <div className='details-icons-des-item'>
                    <LiaBathSolid/>
                    <p className=''>{bath} Bath</p>
                </div>
                <div className='details-icons-des-item'>
                    <LiaArrowsAltSolid/>
                    <p className=''>{area} Sft</p>
                </div>
            </div>
            <div className='dotted'/>
            <div className='rent-btn-con rent-in-details'>
                <p className='rent-p'><span className='rent-spa'>${rent}</span> /month</p>
            </div>
        </div>
    )
    
    

}

export default HotelDetails


// const [data,setData]=useState([])


    // let {id}=useParams()
    // console.log(id);

    // const getFilteredData=()=>{
        
    //     const detailsData=data.find((e)=>e.id===parseInt(id))
    //     const {name,hotelImages,location}=detailsData
    //     console.log(name,hotelImages,location)
    // }

    // const getData= async ()=>{
    //     // fetch('hotelData.json',
    //     // {
    //     //     headers:{
    //     //         'Content-Type':'application/json',
    //     //         'Accept':"application/json"
    //     //     }
    //     // })
    //     // .then((response)=>{
    //     //     return response.json();
    //     // })
    //     // .then(function(myJson){
    //     //     setData(myJson)
    //     // })
    //     try {
    //         const response = await fetch('hotelData.json',
    //         {
    //             headers:{
    //                 'Content-Type':'application/json',
    //                 'Accept':"application/json"
    //             }
    //         });
    //         const myJson = await response.json();
            
    //         setData(myJson)
    //         console.log(myJson);
    //         await getFilteredData()
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }
    

    // useEffect(()=>{
    //     getData()
    // },[])

    
    // console.log(name,location,rent,hotelImages,room,area);

    // return(
    //     <div className=''>
    //         <h1 className=''>{name}</h1>
    //         <Carousel interval={3000}>   
    //                 {
    //                 hotelImages.map((e)=>
    //                 <Carousel.Item>
    //                 <img alt='hotel-img' src={e.img} className='img-item-details'/>
    //                 </Carousel.Item>)
    //                 } 
    //         </Carousel>
    //         <div className='location-con-details'>
    //                 <IoLocationOutline className='location-icon'/>
    //                 <span  className='location-des'>{location}</span>
    //         </div>

    //     </div>
    // )
