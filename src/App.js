import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import ContextCity from './Context/ContextCity'
import HotelDetails from './Components/HotelDetails'
import { useRef, useState } from 'react';

function App() {
  const [city,setCity]=useState(1)
  const [lastItem,setlastItem]=useState(6)
  // const hotelData=useRef([])
  const [hotelData,sethotelData]=useState([])

  const changeCity=(id)=>{
    setCity(id)
}
 const setLastIndex=(n)=>{
    setlastItem(n)
 }
 const setDataInContext=(data)=>{
    sethotelData(data)
 }

  return (
    <div className="App">
      <BrowserRouter>
        <ContextCity.Provider value={{city:city,changeCity:changeCity,lastIndex:lastItem,setLastIndex:setLastIndex,hotelData:hotelData,setDataInContext:setDataInContext}}>
          <Routes >
            <Route exact path='/' element={<Body/>}/>
            <Route exact path='/:id' element={<HotelDetails/>}/>
          </Routes>
        </ContextCity.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
