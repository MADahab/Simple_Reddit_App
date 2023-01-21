import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  Routes
} from "react-router-dom";
import { Latest } from './features/latest/Latest';
import { Favorites } from './features/favorites/Favorites';
import { Sports } from './features/sports/Sports';
import { Cars } from './features/cars/Cars';
import { Food } from './features/food/Food';
import { Search } from './features/search/Search'

function App() {
  return (
    <div className="App">
      <div className="top">
        <h1>Alt.Reddit</h1>      
        <nav className='navigation' >                
              <NavLink className='navLink' to='/latest'
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
        <Route path="/*" element={<Latest className='bigComp'/>} />       
        <Route path="/latest/*" element={<Latest className='bigComp'/>} /> 
        <Route path="/favorites/*" element={<Favorites className='bigComp'/>} />
        <Route path="/sports/*" element={<Sports className='bigComp'/>} /> 
        <Route path="/cars/*" element={<Cars className='bigComp'/>} />   
        <Route path="/food/*" element={<Food className='bigComp'/>} /> 
        <Route path="/search/*" element={<Search className='bigComp'/>} />     
      </Routes>      
    </div>
  );
}

export default App;
