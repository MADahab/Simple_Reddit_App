import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../App.css';
import { Post } from '../post/Post';
import { selectFavorites , selectIsLoading, filterPosts, selectFilter} from './favoritesSlice'
import { Link } from "react-router-dom"

export function Favorites({dmode}) {

  const posts = useSelector(selectFavorites); 
  const searchFavList = useSelector(selectFilter);
  const dispatch = useDispatch(); 
  const [name , setName] = useState('');

  const handleSearch = ({ target }) => setName(target.value);

  const dstyle = {
    backgroundColor: "#3a3737" ,   
  }  
  const lstyle = {
    backgroudColor: "fafafa",    
  };

  const dstyle2 = {
    backgroundColor: "#3a3737" ,
    borderColor: "white",
    color: "white"
  };
  
  const lstyle2 = {
    backgroundColor: "#fafafa",
    borderColor: 'black',
    color: 'black'
  };

  

  useEffect(() => {
    if (name.length > 0 ){
    dispatch(filterPosts(name))}
  },[name])

  

  return ( 
    <div>
      <div className='sbarcomp' style={dmode? dstyle2: lstyle2}>          
            <label style={{width: '40%'}} for='sbarfav' >Search in favourites:</label>
            <input value={name} id='sbarfav' onChange={handleSearch} style={{width: '40%' , justifyContent: 'left'}}/>          
        </div>
      <div id='favorites' className='bigComp'></div>
      <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
      <div  className='bigComp'>
      { posts.length === 0 ?
          <Link to='/search' className='nofavyet' style={dmode? dstyle2: lstyle2} >
            <h1>No Favorites yet</h1>
            <h3>click to search for post</h3>
          </Link>
          : name === '' ?          
            posts.map((post) => (          
              <Post dmode={dmode} key={post.data.id} post={post}/> 
            ))
          :  
            searchFavList.map((post) => (          
              <Post dmode={dmode} key={post.data.id} post={post}/> 
            ))

          }              
      </div>      
    </div>
  );
}
