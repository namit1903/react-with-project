import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import React from 'react'


const useGetSingleProduct = () => {
  let {id}=useParams();
  let [obj,setObj]=useState(null);
const getData=async()=>{
  let response=await fetch(`https://dummyjson.com/products/${id}`);
  let data=await response.json();
  console.log("data",data);
setObj(data);
}
// console.log(params);
useEffect(()=>{
  getData();
},[])
  return obj;
}

export default useGetSingleProduct
