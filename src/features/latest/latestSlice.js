import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const loadLatest = createAsyncThunk(
  'latest/loadLatest',
  async () => {
    const data = await fetch('https://www.reddit.com/r/popular.json');
    const json = await data.json();
    return json;
  }
);

export const latestSlice = createSlice({
  name: 'latest',
  initialState: {   
    posts: [],
    isLoading: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: {
    [loadLatest.pending]: (state) => {
      state.isLoading = true;
    },
    [loadLatest.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.children;
    }
  }  
  
});


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPosts = (state) => state.latest.posts;
export const selectIsLoading = (state) => state.latest.isLoading;
export default latestSlice.reducer;
