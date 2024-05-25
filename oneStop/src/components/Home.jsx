import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimmerUi from './ShimmerUi';
function Home() {
  console.log("home rendered")
 let[allData,setAllData]=useState([]);
 let [ProductArray, setProductArray]=useState(allData);
  console.log("ye fetched array hai",allData)
  
  let getData=async()=>{

    let data= await fetch("https://fakestoreapi.com/products");
    let obj=await data.json();
    console.log("getData",obj)
    setAllData(obj)//rerendering hogi ab
    setProductArray(obj)//rerendering
  }
useEffect(()=>{setTimeout(()=>
  getData()
,3000)
 
 console.log("useEffect started")
},[])

function topRatedProduct(){
  console.log(allData,"all data")
let data=allData.filter((item)=>(item.rating.rate>=4.5));
console.log("ji",data)
// setInput(ProductArray)
setProductArray(data)
console.log("hi:",ProductArray)
  }
  //DRY principle
function filterProduct(e,proName){
 
  e.target.classList.add('btn-active')

  console.log("gg",e.target.classList)
let data=allData.filter((item)=>(item.category===proName));
setProductArray(data)
  }
function submitSearch(e){
  e.preventDefault();
  console.log("value fetched",e.target[0].value)
  let i=document.querySelector('input')
  let value=e.target[0].value;
  let data=allData.filter(product =>
    product.title.toLowerCase().includes(value.toLowerCase()))
    i.value=""
 
  setProductArray(data)
  
}
// if(ProductArray.length==0) return(
// <ShimmerUi/>)
// else
console.log("jsx print hoga",ProductArray)
return(
ProductArray.length==0?
 (<ShimmerUi/>): (
    <div>
       <div className="filter m-5 flex justify-evenly">
   
    <div className="options bg-black  flex justify-between">
    <button className={`btn btn-xs btn-primary`} onClick={(e)=>topRatedProduct(e)}>Top-Rated</button>
    <button className={` btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"electronics")}> Electronics</button>
    <div className="search">
      <form onSubmit={submitSearch}>
      <input  type="text" placeholder="hunt your stuff...." className='border-2 '></input>
      <button className={`btn btn-xs btn-secondary`}>hunt items</button>
      </form>
    </div>
    <button className={`btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"men's clothing")}>Men clothing</button>
    <button className={` btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"women's clothing")}>Women Clothing</button>
    </div>
   </div>
   <div className="item-container flex flex-wrap gap-3">
   {ProductArray.map((obj) => (
          <ItemCard obj={obj} key={obj.id}></ItemCard>
        ))}
   </div>
    </div>
  )
)
}

export default Home
