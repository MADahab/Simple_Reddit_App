import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments ,selectIsLoading, loadComments, selectMain, selectFailed} from './bigPostSlice';
import styles from './bigPost.css';
import { clearAllListeners } from '@reduxjs/toolkit';
import { Post } from '../post/Post';

export function BigPost({post, isActive, handleClick, dmode}) {  
  const failed = useSelector(selectFailed)
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading)
  const main = useSelector(selectMain)
  const dispatch = useDispatch();

  const dstyle = {
    backgroundColor: "#3a3737" ,
    borderColor: "white",
    color: "white"
  }
  
  const lstyle = {
    backgroudColor: "fafafa",
    borderColor: 'black',
    color: 'black'
  };

  
  useEffect(() => {
    dispatch(loadComments(`https://www.reddit.com/${post.permalink}.json`));    
    },[dispatch, handleClick]);

    
  //const count = useSelector();
  //const dispatch = useDispatch();
  //const [, ] = useState();

  let srcpic = false
  if (post.thumbnail === 'self' || post.thumbnail === 'default') {
    srcpic = true
  }

    

  
    return (
      <div style={dmode? dstyle: lstyle} onMouseLeave={handleClick}  className='modifiedlCont' post={post}>
        <div className='TaAmod'>
          <h2>{post.title}</h2>    
        </div>    
        <div className='selftext'>
          {post.selftext}
        </div>         
        <img className='imgmod' src=
          {srcpic ? '' : post.url} 
        />         
        <div className='commentBox'>
          <h2>Comments</h2>
         {
          comments.map(comment => {
            return (
              <div key={comment.data.id}  >              
                <h4>{comment.data.author}</h4>
                <h5 style={{color:dmode? 'black' : 'black' }} >{comment.data.body}</h5>
              </div>
            )
          })
         }
        </div>
        <div style={{color:dmode? 'black' : 'black' }} className='infomod'>
          <h6>Up votes: {post.ups}</h6>
          <h6>Comments: {post.num_comments}</h6>
          <h6>Posted by {post.author}</h6>
        </div>
        <button className='btn'>
          Add to Fav.
        </button>  
      </div>
    )

}

// {main.selftext.includes('&amp') ? 'No Self Content': main.selftext}

//{post.thumbnail === 'self' ? require('../../imgs/R1.png') : post.thumbnail}