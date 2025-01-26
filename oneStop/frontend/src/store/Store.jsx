import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice.jsx';
import apiSlice from '../Utility/authApi.js';

const Store = configureStore({
  reducer:{
    cart:CartReducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default Store///iski jagah AppStore bnaya hai utilities me
