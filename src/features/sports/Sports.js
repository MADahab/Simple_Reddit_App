import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadSports } from './sportsSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Sports({dmode}) {
  
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
    dispatch(loadSports()); 
    
    }, [dispatch]);
  

  if (isLoading) {
    return ( 
      <div>
        <div id='sports'><h1 className='loading'>Loading..</h1></div>
        <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
        <div className='lodstatus'>
          <img src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' />
        </div>
      </div>    
    );
  } else {
    return (
      <div >
        <div id='sports'></div>
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
