import React, { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import {  } from './Slice';
import styles from '../../App.css';
import { BigPost} from '../bigPost/BigPost'
import { removePost, addPostFavorites, selectFavorites } from '../favorites/favoritesSlice'

export function Post(props) {
  const dispatch = useDispatch()
  const favList = useSelector(selectFavorites);
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

   //funcs for adding and removing to/from favs

   const handleAdd = () => {
    dispatch(addPostFavorites(`https://www.reddit.com/${post.permalink}.json`))
    
  }

  const handleRemove = () => {
    dispatch(removePost(post))
  }

  const found = favList.find(favpost => favpost.data.id === post.id)

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
      <div  className='smallCont' style={dmode? dstyle: lstyle}>
        <h2 className='TaA' >{post.title}</h2> 
        <div className='enlargeBtn'>
          <img src={require('../../imgs/enlarge.png')} style={dmode? dstyle: lstyle}  onClick={handleClick} />
        </div>        
        <p style={{color:dmode? 'black' : 'black' }} className='pa' src='../' >Posted by {post.author}</p>      
        <img className='img' src=
          {srcpic ? require('../../imgs/R1.png') : post.thumbnail} 
        />   
        <div className='info' style={{color:dmode? 'black' : 'black' }}>
          <h6>Up votes: {post.ups}</h6>
          <h6>Comments: {post.num_comments}</h6>
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
    );
  } 
}
