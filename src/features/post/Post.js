import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import {  } from './Slice';
import styles from '../../App.css';
import { BigPost} from '../bigPost/BigPost'

export function Post(props) {
  const post = props.post.data;
  const [isActive, setIsActive] = useState(false);
  

  const handleClick = () => {
  
    setIsActive(current => !current);

  };
  //const count = useSelector();
  //const dispatch = useDispatch();
  //const [, ] = useState();

  let srcpic = false
  if (post.thumbnail === 'self' || post.thumbnail === 'default') {
    srcpic = true
  }

  
  if (isActive) {
    return (
      <BigPost handleClick={handleClick} isActive={isActive} post={post}/>
    )

  } else {
    return (
      <div onClick={handleClick} className='smallCont'>
        
        <h2 className='TaA' >{post.title}</h2>   
        
        <p className='pa' src='../' >Posted by {post.author}</p>      
        <img className='img' src=
          {srcpic ? require('../../imgs/R1.png') : post.thumbnail} 
        />   
        <div className='info'>
          <h6>Up votes: {post.ups}</h6>
          <h6>Comments: {post.num_comments}</h6>
        </div>
        <button className='btn'>
          Add to Fav.
        </button>  
      </div>
    );
  }



  
}


//{post.thumbnail === 'self' ? require('../../imgs/R1.png') : post.thumbnail}