import { configureStore } from '@reduxjs/toolkit';
import latestReducer from '../features/latest/latestSlice';
import sportsReducer from '../features/sports/sportsSlice';
import bigPostReducer from '../features/bigPost/bigPostSlice';
import carsReducer from '../features/cars/carsSlice';
import foodReducer from '../features/food/foodSlice';
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {    
    latest: latestReducer,
    sports: sportsReducer,
    bigPost: bigPostReducer,
    cars: carsReducer,
    food: foodReducer,
    search: searchReducer
  },
});
