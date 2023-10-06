import { useState } from 'react'
import FilterItem from '../FilterItem'
import { BsArrowRight } from "react-icons/bs";
import './index.css'

const filterItemsList=[
    {id:1,item:"New York"},
    {id:2,item:"Mumbai"},
    {id:3,item:"Paris"},
    {id:4,item:"London"}
]
console.log(filterItemsList);

const FilterSection=()=>{
    const [active,setActive]=useState(1)
 
    const activeStatus=(id)=>{
        setActive(id)
    }
    
    return(
        <div className='filter-view-con'>
            <div className='list-item-con'>
            {filterItemsList.map((e)=><FilterItem Btnitem={e} key={e.id} activeStatus={activeStatus} isActive={e.id===active}/>)} 
            </div>
            <div className='view-all'>View All <BsArrowRight/></div>
        </div>
    )   
     

}

export default FilterSection