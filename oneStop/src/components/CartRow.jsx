import React from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";

import { FaSkullCrossbones } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, decreaseQuantity, removeCart } from '../store/CartSlice';

const CartRow = ({item}) => {
  console.log("pehlea item")
  let{thumbnail,title,price,category,rating,id}=item.obj;
  const {quantity}=item
  let dispatch=useDispatch();
  // let cartItems=useSelector(state=>state.cart.itemArray)
  function handleRemove(e){
dispatch(removeCart(id))
  }
  function handleIncrease(){
    dispatch(addCart(item.obj))
    console.log("additem")
  }
  function handleDecrease(){
    console.log("removeitem",id)
    // dispatch(decreaseQuantity(id))
    dispatch(decreaseQuantity(id))
  }
  return (
   
     <tr className='text-xl h-[10vh]'>
      
      <td>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-18 h-18">
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">  {title}</div>
            <div className="text-sm opacity-50"></div>
          </div> 
        </div>
      </td>
      <td>
    
        <br/>
        <span className=" capitalize badge text-xl ">{category}</span>
      </td>
      <td><FaCircleArrowUp onClick={handleIncrease}/> {quantity}<span onClick={handleDecrease}><FaCircleArrowDown /></span> </td>
      <td>{rating}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Rs.{price}</button>
      </th>
      <th  className="btn btn-ghost align-self-4"onClick={handleRemove}><div>Remove<FaSkullCrossbones /></div></th>
    </tr>
  )
}

export default CartRow
