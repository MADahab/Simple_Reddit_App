import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadLatest } from './latestSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Latest({dmode}) {
  
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
    dispatch(loadLatest()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return (
      <div>
        <div id='latest'><h1 className='loading'>Loading..</h1></div>
        <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
        <div className='lodstatus'>           
           <img src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' />
        </div>
      </div>      
    );
  } else {
    return (
      <div >
        <div id='latest'></div>
        <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
        <div  className='bigComp'>
          {posts.map((post) => (          
              <Post dmode={dmode} key={post.data.id} post={post} />  
          ))}              
        </div>
      </div>
    );
  }
  
}
