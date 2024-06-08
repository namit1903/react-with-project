import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice.jsx';


const Store = configureStore({
  reducer:
  {
    cart:CartReducer
  }
})

export default Store
