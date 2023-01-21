import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadLatest } from './latestSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Latest() {
  
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(loadLatest()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return (
     <div id='latest' ><h1>Loading..</h1></div>
    );
  } else {
    return (
      <div >
        <div id='latest'></div>
        <div  className='bigComp'>
          {posts.map((post) => (          
              <Post key={post.data.id} post={post} />  
          ))}              
        </div>
      </div>
    );
  }
  
}
