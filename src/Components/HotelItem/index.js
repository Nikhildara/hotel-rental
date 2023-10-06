import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { IoBedOutline } from "react-icons/io5"
import { LiaBathSolid ,LiaArrowsAltSolid} from "react-icons/lia"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const HotelItem=(props)=>{
    const {hotelListItem}=props 
    const {area,bath,beds,city,hotelImages,location,name,popular,rent,room,sale,id}=hotelListItem
    return(
        
            <li className='hotel-item'>
                <Link to={`/${id}`} className='link-item'>
                <Carousel interval={null}>   
                    {
                        hotelImages.map((e)=>
                        <Carousel.Item>
                        <img alt='hotel-img' src={e.img} className='img-item'/>
                        
                        </Carousel.Item>)
                    } 
                </Carousel>
                <div className='location-con'>
                    <IoLocationOutline className='location-icon'/>
                    <span  className='location-des'>{location}</span>
                </div>
                <h1 className='item-head'>
                    {name}
                </h1>
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
                <div className='rent-btn-con'>
                    <p className='rent-p'><span className='rent-spa'>${rent}</span> /month</p>
                    <button className='read-btn'>Read More</button>
                </div>
                </Link>
            </li>
        
    )
}

export default HotelItem