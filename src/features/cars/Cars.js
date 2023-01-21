import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadCars } from './carsSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Cars() {
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadCars()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return (
     <div id='cars' ><h1>Loading..</h1></div>
    );
  } else {
    return (
      <div >
        <div id='cars'></div>
        <div  className='bigComp'>
          {posts.map((post) => (          
              <Post key={post.data.id} post={post} />  
          ))}              
        </div>
      </div>
    );
  }
  
}
