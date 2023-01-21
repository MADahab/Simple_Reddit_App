import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadSports } from './sportsSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Sports() {
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadSports()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return ( 
      <div id='sports' ><h1>Loading..</h1></div>
    );
  } else {
    return (
      <div >
        <div id='sports'></div>
        <div  className='bigComp'>
          {posts.map((post) => (          
              <Post key={post.data.id} post={post} />  
          ))}              
        </div>
      </div>
    );
  }
  
}
