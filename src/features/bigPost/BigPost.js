import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments ,selectIsLoading, loadComments, selectMain, selectFailed} from './bigPostSlice';
import styles from './bigPost.css';
import { clearAllListeners } from '@reduxjs/toolkit';
import { Post } from '../post/Post';
import { removePost, addPostFavorites, selectFavorites } from '../favorites/favoritesSlice'


export function BigPost({post, isActive, handleClick, dmode}) {  
  const failed = useSelector(selectFailed)
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading)
  const main = useSelector(selectMain)
  const dispatch = useDispatch();
  const favList = useSelector(selectFavorites);

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

  const handleAdd = () => {
    dispatch(addPostFavorites(`https://www.reddit.com/${post.permalink}.json`))
    window.confirm("Added to favorites")
  }

  const handleRemove = () => {
    dispatch(removePost(post))
  }

  const found = favList.find(favpost => favpost.data.id === post.id)

  useEffect(() => {
    dispatch(loadComments(`https://www.reddit.com/${post.permalink}.json`));    
    },[dispatch, handleClick]);  

    let srcpic = false
    if (post.thumbnail === 'self' || post.thumbnail === 'default') {
      srcpic = true
    }  
  
    return (
      <div style={dmode? dstyle: lstyle} className='modifiedlCont' post={post}>
        <div className='TaAmod'>          
          <h2>{post.title}</h2>    
          <div>
            <button style={dmode? dstyle: lstyle} className='closebtn' onClick={handleClick}>X</button>
          </div>
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
        {found
        ?
          <button onClick={handleRemove} className='btn'>
            Remove From Favorites
          </button>  
        :
          <button onClick={handleAdd} className='btn'>
            add to favorites
          </button> 
        }
        
      </div>
    )

}



// {main.selftext.includes('&amp') ? 'No Self Content': main.selftext}

//{post.thumbnail === 'self' ? require('../../imgs/R1.png') : post.thumbnail}