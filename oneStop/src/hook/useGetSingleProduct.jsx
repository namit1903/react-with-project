import { useState,useEffect } from "react";
import React from 'react'


const useGetSingleProduct = () => {
  let [obj,setObj]=useState(null);
const getData=async()=>{
  let response=await fetch(`https://fakestoreapi.com/products/${id}`);
  let data=await response.json();
  console.log("data",data);
setObj(data);
}
console.log(params);
useEffect(()=>{
  getData();
},[])
  return obj;
}

export default useGetSingleProduct
