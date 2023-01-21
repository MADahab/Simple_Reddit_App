import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadFood } from './foodSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Food() {
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadFood()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return (
     <div id='food' ><h1>Loading..</h1></div>
    );
  } else {
    return (
      <div >
        <div id='food'></div>
        <div  className='bigComp'>
          {posts.map((post) => (          
              <Post key={post.data.id} post={post} />  
          ))}              
        </div>
      </div>
    );
  }
  
}
