import React, { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import {  } from './Slice';
import styles from '../../App.css';
import { BigPost} from '../bigPost/BigPost'

export function Post(props) {
  const post = props.post.data;
  const dmode = props.dmode;
  const [isActive, setIsActive] = useState(false);

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
  

  const handleClick = () => {
  
    setIsActive(current => !current);

  };
  //const count = useSelector();
  //const dispatch = useDispatch();
  //const [, ] = useState();

  useEffect(() => {  
  },[])

  let srcpic = false
  if (post.thumbnail === 'self' || post.thumbnail === 'default') {
    srcpic = true
  }

  
  if (isActive) {
    return (
      <BigPost dmode={dmode} handleClick={handleClick} isActive={isActive} post={post}/>
    )

  } else {
    return (
      <div  onClick={handleClick} className='smallCont' style={dmode? dstyle: lstyle}>
        
        <h2 className='TaA' >{post.title}</h2>   
        
        <p style={{color:dmode? 'black' : 'black' }} className='pa' src='../' >Posted by {post.author}</p>      
        <img className='img' src=
          {srcpic ? require('../../imgs/R1.png') : post.thumbnail} 
        />   
        <div className='info' style={{color:dmode? 'black' : 'black' }}>
          <h6>Up votes: {post.ups}</h6>
          <h6>Comments: {post.num_comments}</h6>
        </div>       
      </div>
    );
  } 
}


/*  <button className='btn'>
          Add to Fav.
    </button> 
*/     

//{post.thumbnail === 'self' ? require('../../imgs/R1.png') : post.thumbnail}