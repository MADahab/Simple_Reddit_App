import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadCars } from './carsSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Cars({dmode}) {
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  const dstyle = {
    backgroundColor: "#3a3737" ,   
  }
  
  const lstyle = {
    backgroudColor: "fafafa",    
  };

  
  useEffect(() => {
    dispatch(loadCars()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return (
        <div>
          <div id='cars'><h1 className='loading'>Loading..</h1></div>
          <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
          <div className='lodstatus'>
           <h1>Loading...</h1>
          </div>
        </div> 
    );
  } else {
    return (
      <div >
        <div id='cars'></div>
        <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
        <div  className='bigComp'>
          {posts.map((post) => (          
              <Post dmode={dmode} key={post.data.id} post={post}/>  
          ))}              
        </div>
      </div>
    );
  }
  
}
