import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const addPostFavorites = createAsyncThunk(
  'favorites/addPost',
  async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  }
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {   
    posts: [],
    filterList: [],
    isLoading: false,
  },
  
  reducers: {
    removePost: (state,action) => {      
      state.posts = state.posts.filter((item) => item.data.id !== action.payload.id)
    },
    filterPosts: (state,action) => {      
      state.filterList = state.posts.filter((item) => item.data.title.toLowerCase().includes(action.payload.toLowerCase()))      
    }  
  },
  extraReducers: {
    [addPostFavorites.pending]: (state) => {
      state.isLoading = true;
    },
    [addPostFavorites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload[0].data.children[0]);
    }
  }    
});

export const selectFavorites = (state) => state.favorites.posts;
export const selectIsLoading = (state) => state.favorites.isLoading;
export const selectFilter = (state) => state.favorites.filterList;
export const { filterPosts } = favoritesSlice.actions
export const { removePost } = favoritesSlice.actions
export default favoritesSlice.reducer;
