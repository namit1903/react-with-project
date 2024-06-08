import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name:'cart',
  initialState:{
    itemArray:[],
    ids:[],
    totalPrice:0,
    totalProducts:0
  },
  reducers:{
addCart:(state,action)=>{
  let cartObj={obj:action.payload,
    quantity:1}
  let presentObj=state.itemArray.find(item=>item.obj.id==action.payload.id);
  console.log(presentObj,"presentObj")
  state.totalProducts=state.totalProducts+1;
  state.totalPrice=state.totalPrice+cartObj.obj.price
  if(presentObj){
    presentObj.quantity=presentObj.quantity+1;
  }
  else{
    state.ids.push(action.payload.id);
  state.itemArray.push(cartObj)}
},
removeCart:(state,action)=>{
  let id=action.payload;
  // console.log("removebutton",id)
  state.totalProducts=state.totalProducts-1;
  let price = state.itemArray.find((cartObj) => cartObj.obj.id == id).obj.price;
 

  state.totalPrice=state.totalPrice-price;
  state.itemArray=state.itemArray.filter(item=>item.obj.id!=id);
  // console.log("removebutton",ids)
  state.ids=state.ids.filter(objid=>objid!=id)

},
decreaseQuantity:(state,action)=>{
  console.log("decrese action")
    let presentObj=state.itemArray.find(item=>item.obj.id==action.payload);
    presentObj.quantity--;
    // console.log(presentObj,"presentObj")
    if(presentObj.quantity==0){
      state.itemArray=state.itemArray.filter(item=>item.obj.id!=action.payload)
      state.ids=state.ids.filter(item=>item!=action.payload)
    }
  } ,
  clearCart:(state,action)=>{
    state.itemArray.length=0
      }
  },
});
export const {addCart,removeCart,clearCart,decreaseQuantity}=CartSlice.actions
export default CartSlice.reducer
