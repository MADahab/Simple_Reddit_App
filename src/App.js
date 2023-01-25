import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  Routes,
  } from "react-router-dom";
import { Latest } from './features/latest/Latest';
import { Favorites } from './features/favorites/Favorites';
import { Sports } from './features/sports/Sports';
import { Cars } from './features/cars/Cars';
import { Food } from './features/food/Food';
import { Search } from './features/search/Search';
import { Welcome } from './features/welcomePage/Welcome'

function App() {
  
  // Setting some state , func and consts to handle dark/light mode

const [dmode, setDmode] = useState(false);
const navs = document.getElementsByClassName('navLink');
const scont = document.getElementsByClassName('smallCont');


//change dark/light mode state
const handleDLmode = () => {
  setDmode(current => !current); 
}

//appling dark mode for navlinks
if (dmode === true ) {
  for (const nav of navs) {
    nav.style.backgroundColor = "#3a3737";
    nav.style.borderColor = "white";
    nav.style.color = "white"    
  } 
} 

//appling light mode for navlinks
if (dmode === false) {
  for (const nav of navs) {
    nav.style.backgroundColor = '#fafafa';
    nav.style.borderColor = 'black';
    nav.style.color = 'black'
  };  
}

useEffect(() => {  
},[handleDLmode, navs])


// style conts for dark and light
const dstyle = {
  backgroundColor: "#3a3737" ,
  borderColor: "white",
  color: "white"
}

const lstyle = {
  backgroudColor: "rgb(247, 246, 246)",
  borderColor: 'black',
  color: 'black'
};
const dstyle2 = {
  backgroundColor: "#131212"   
};
const lstyle2 = {
  backgroudColor: "rgb(247, 246, 246)" 
};


// the app
  
  return (
    <div className="App">
      <div style={dmode? dstyle2 :lstyle2} className="top">        
        <h1 id='swbtn' style={dmode? dstyle: lstyle} onClick={handleDLmode} > Alt.Reddit</h1>      
        <nav className='navigation' >                
              <NavLink className={'navLink'} to='/latest'    
               style={({ isActive }) => ({ width: isActive ? '100%' : '20%' })}   
              >
                Trending
              </NavLink>                     
              <NavLink className='navLink' to='/favorites'  
                style={({ isActive }) => ({ width: isActive ? '100%' : '20%' })}                  
                >
                Favorites
              </NavLink>  
              <NavLink className='navLink' to='/sports'                
                style={({ isActive }) => ({ width: isActive ? '100%' : '20%' })}                
              >
                Sports
              </NavLink>
              <NavLink className='navLink' to='/food'                
                style={({ isActive }) => ({ width: isActive ? '100%' : '20%' })}
              >
                Food
              </NavLink>
              <NavLink className='navLink' to='/cars'
                style={({ isActive }) => ({ width: isActive ? '100%' : '20%' })}
              >
                Cars
              </NavLink>  
              <NavLink className='navLink' to='/search'
                style={({ isActive }) => ({ width: isActive ? '100%' : '20%' })}
              >
                Search
              </NavLink>                  
        </nav>
      </div>
      
      <Routes>  
        <Route path="/*" element={<Welcome dmode={dmode} className='bigComp'/>} />       
        <Route path="/latest/*" element={<Latest dmode={dmode} className='bigComp'/>} /> 
        <Route path="/favorites/*" element={<Favorites dmode={dmode} className='bigComp'/>} />
        <Route path="/sports/*" element={<Sports dmode={dmode}  className='bigComp'/>} /> 
        <Route path="/cars/*" element={<Cars dmode={dmode}  className='bigComp'/>} />   
        <Route path="/food/*" element={<Food dmode={dmode}  className='bigComp'/>} /> 
        <Route path="/search/*" element={<Search dmode={dmode}  className='bigComp'/>} />     
      </Routes>      
    </div>
  );
}

export default App;
