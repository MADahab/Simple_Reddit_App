import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments ,selectIsLoading, loadComments, selectMain, selectFailed, clearBigPost} from './bigPostSlice';
import styles from './bigPost.css';
import { clearAllListeners } from '@reduxjs/toolkit';
import { Post } from '../post/Post';
import { findPath, propGetter, dig } from './findpath'
import { removePost, addPostFavorites, selectFavorites, selectIsLoading as selectFavloading } from '../favorites/favoritesSlice'


export function BigPost({post, isActive, handleClick, dmode}) {  
  const failed = useSelector(selectFailed);
  const favLoading = useSelector(selectFavloading);
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading);
  const main = useSelector(selectMain);
  const dispatch = useDispatch();
  const favList = useSelector(selectFavorites);


  //some styles to handle light and dark mode
  
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
    
  }
  //remove post from fav
  const handleRemove = () => {
    dispatch(removePost(post))
  }
  //clear big bost state when closing it
  const handleClear = () => {
    dispatch(clearBigPost())
  }
  //chek if post if added in fav list
  const found = favList.find(favpost => favpost.data.id === post.id)

  //disable the add/remove fav when loading to prevent duplicattion
  
  

  useEffect(() => {
    dispatch(loadComments(`https://www.reddit.com/${post.permalink}.json`));    
    },[dispatch]);  

    
    let srcpic = false
    if (post.thumbnail === 'self' || post.thumbnail === 'default') {
      srcpic = true
      
    } 
    //url value coould be and image or article. fcondition to check it
    const handleImg = () => {if (post.url.includes('jpeg') || post.url.includes('png') || post.url.includes('jpg') || post.url.includes('jpg')) {

      return (
        <img className='imgmod' src=
            {post.url} 
          />
      )
    } else {
      return (
        <div className='extcont'>
          <a   href={post.url} target='_blank' >
            <img className='extlink' src=
                {post.thumbnail.includes('.com') ? post.thumbnail : require('../../imgs/external.png')} 
              />
          </a>           
        </div>
      )
    }}

    
    
    let audio
    let video
    if (post.is_video === true) {      
      audio = document.getElementById("audioOnly")      
      video = document.getElementById("videoOnly")      
    }

    const getVid = () => {
      try {        
        return (
          <div style={{width: '100%', display: 'flex'}}>
            <div className='vidcont' style={{marginBottom: '30px', marginTop: '-25px' }}>
              <video style={{width: '100%'}} id='videoOnly'  onPlay={() => audio.play()} onPause={() => audio.pause()} src={dig(main, 'fallback_url')} controls/>  
              <audio style={{display: 'none'}} id='audioOnly' src={`${post.url}/DASH_audio.mp4`} controls/>        
            </div>
          </div>
        )
      }
      catch(e) {
        console.log('vurl not found')
        return (
          <div className='extcont'>
          <a   href={post.url} target='_blank' >
            <img className='extlink' src=
                {post.thumbnail.includes('.com') ? post.thumbnail : require('../../imgs/external.png')} 
              />
          </a>           
        </div>
        )
      }
    }

    return (
      <div style={dmode? dstyle: lstyle} className='modifiedlCont' post={post}>               
        <div className='TaAmod'>          
          <h2>{post.title}</h2> 
          <a className='smallink' style={{color:dmode? 'black' : 'black' }} href={`https://www.reddit.com/${post.permalink}`} target='_blank'><h6>Reddit url</h6></a>   
          <div>          
            <button style={dmode? dstyle: lstyle} className='closebtn' onClick={handleClick} onMouseUp={handleClear} >X</button>
          </div>
        </div>    
        <div className='selftext'>
          {post.selftext}
        </div>
        {
          post.is_video === false ?
          handleImg()
          :
          getVid()
        }
                      
    
        <div className='commentBox'>          
          <h2>Comments</h2>
         {
          isLoading ?
          <div>
            <div className='comload'>
             <img src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' />
            </div>
          </div>
          :
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
          {found
          ?
          <button disabled={favLoading? "disabled" : '' } onClick={handleRemove} className='bpbtn2'>
            
          </button>  
          :
          <button disabled={favLoading? "disabled" : '' } onClick={handleAdd} className='bpbtn'>
            
          </button> 
          }           
        </div>        
      </div>
    )

}


//.reddit_video.fallback_url


// {main.selftext.includes('&amp') ? 'No Self Content': main.selftext}

//{post.thumbnail === 'self' ? require('../../imgs/R1.png') : post.thumbnail}

/*
          <video controls autoPlay>
            <source  src={furl} />
          </video>
          */