import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import {  } from './Slice';
import styles from '../../App.css';
import { Post } from '../post/Post';
import { selectFavorites , selectIsLoading} from './favoritesSlice'
import { Link } from "react-router-dom"

export function Favorites({dmode}) {

  const posts = useSelector(selectFavorites);
  //const dispatch = useDispatch();
  //const [, ] = useState();

  const dstyle = {
    backgroundColor: "#3a3737" ,   
  }  
  const lstyle = {
    backgroudColor: "fafafa",    
  };

  const dstyle2 = {
    backgroundColor: "#3a3737" ,
    borderColor: "white",
    color: "white"
  };
  
  const lstyle2 = {
    backgroundColor: "#fafafa",
    borderColor: 'black',
    color: 'black'
  };

  

  return ( 
    <div>
      <div id='favorites' className='bigComp'></div>
      <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
      <div  className='bigComp'>
      { posts.length === 0 ?
          <Link to='/search' className='nofavyet' style={dmode? dstyle2: lstyle2} >
            <h1>No Favorites yet</h1>
            <h3>click to search for post</h3>
          </Link>
          :
          posts.map((post) => (          
            <Post dmode={dmode} key={post.data.id} post={post}/>  
        ))

          }              
      </div>      
    </div>
  );
}
