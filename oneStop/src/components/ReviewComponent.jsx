import React from 'react';
import {useState} from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
const ReviewComponent = ({obj,showIndex,setShowIndex,idx}) => {
  console.log("us",idx)
  
  return (
    <div className="review-list border-2 border-emerald-300 h-[20%] w-[60vw] mx-auto mt-2 flex flex-col gap-0">
  <div className="review border-2 border-red-300 bg-emerald-400 flex text-black justify-between ">
    <p>{
obj.reviewerName
    }</p>
    <p onClick={()=>setShowIndex(showIndex==idx?null:idx)}><FaCircleArrowDown /></p>  </div>
  {showIndex==idx ? ( <div className="border-2 w-[60vh] ml-[31.3%] border-red-300 bg-emerald-200 rounded text-black  flex justify-around"><p>{obj.comment}</p><p>Rating:{obj.rating}</p></div>):<></>}

</div>
  )
}

export default ReviewComponent
