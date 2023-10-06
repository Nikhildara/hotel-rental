import React from 'react'

const ContextCity =React.createContext({
    city:1,
    changeCity:()=>{},
    lastIndex:6,
    setLastIndex:()=>{},
    hotelData:[],
    setDataInContext:()=>{}
})

export default ContextCity