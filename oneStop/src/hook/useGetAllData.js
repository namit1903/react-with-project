import {useState,useEffect} from 'react';

import React from 'react'

const useGetAllData = () => {
  let [obj,setObj]=useState();
let getData=async()=>{

  let data= await fetch("https://fakestoreapi.com/products");
  console.log("get..")
  let obj=await data.json();
  setObj(obj);
}
useEffect(()=>{
  getData();
},[]);
return obj;
}

export default useGetAllData

