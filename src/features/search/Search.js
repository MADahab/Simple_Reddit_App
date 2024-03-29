import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading, loadSearch } from './searchSlice';
import { Post } from '../post/Post'
import styles from '../../App.css';


export function Search({dmode}) {
  const [name, setName] = useState('');
  const [limit, setLimit] = useState('75')
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => setName(target.value);
  const handleLimit = ({ target }) => setLimit(target.value);

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
  }
  
  const lstyle2 = {
    backgroudColor: "rgb(232, 232, 232)",
    borderColor: 'black',
    color: 'black'
  };
  
  useEffect(() => {    
      dispatch(loadSearch({name, limit}));
                     
    }, [name, limit]);


    return (
      <div >                
        <div id='search' ></div>
        <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
        { 
        isLoading ?
        <div className='lodstatus'>
          <img className='lodgif' src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' />
        </div>
        :
        <div></div>
        }
        <div className='sbarcomp' style={dmode? dstyle2: lstyle2}>
          <div>
            <label for='sbar' >Search:</label>
            <input value={name} id='sbar' onChange={handleSearch} style={{width: '60%'}}/>
          </div>
          <div>
            <label for='slimit'>Limit:</label>
            <input value={limit} id='slimit' style={{width: '20%' , textAlign: 'center', alignItems: 'center'}} onChange={handleLimit}/>
          </div>
        </div>
        
        <div style={{top: '40px' }} className='bigComp'>
          {posts.map((post) => (          
              <Post dmode={dmode} key={post.data.id} post={post} />  
          ))}              
        </div>
      </div>
    );
  
/*
  if (isLoading) {
    return (
    <div>
      <div id='search' ><h1>Loading..</h1></div>
      <div id='search'></div>
        <div className='sbarcomp'>
          <div>
            <label for='sbar' >Search:</label>
            <input value={name} id='sbar' onChange={handleSearch} style={{width: '60%'}}/>
          </div>
          <div>
            <label for='slimit'>Limit:</label>
            <input value={limit} id='slimit' style={{width: '20%' , textAlign: 'center', alignItems: 'center'}} onChange={handleLimit}/>
          </div>
        </div>

    </div>
     
    );
  } else {
    
  }
  */
  
}
