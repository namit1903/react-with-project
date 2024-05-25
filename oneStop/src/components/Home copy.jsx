import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimmerUi from './ShimmerUi';
function Home() {//this ProductData is an object with a key named ProductData
  // let [ProductArray, setProductArray] = useState([...ProductData]);
  // let [input,setInput]=useState("");
  // let[active,setActive]=useState(null)
  /*
  let ProductArray=ProductData.ProductData;//this merely not help in updating the UI part, only console will print the result so , in order to tell the react  about the updation in the product array we will use the React hook i.e. useState Hook.
  so we'll declare Product array as: below

  */
 let[allData,setAllData]=useState([]);
 let [ProductArray, setProductArray]=useState([]);
  console.log("ye fetched array hai",allData)
  console.log("home rendered")
  let getData=async()=>{
    let data= await fetch("https://fakestoreapi.com/products");
    let obj=await data.json();
    console.log("getData",obj)
    setAllData(obj)
  }
useEffect(()=>{
 getData()
},[])



function topRatedProduct(){
  console.log(allData,"all data")
let data=allData.filter((item)=>(item.rating.rate>=4.5));
console.log("ji",data)
// setInput(ProductArray)
setProductArray(data)//using this function call we are conveying react that VDOM me productArray is updated so please update the UI and re render the Home component with the updated value of the productArray
console.log("hi:",ProductArray)
  }
  //DRY principle
function filterProduct(e,proName){
  // setActive("btn-active")
  e.target.classList.add('btn-active')//ab remove kese kru active class ko

  console.log("gg",e.target.classList)
let data=allData.filter((item)=>(item.category===proName));
// console.log("hi:",ProductArray)
// setInput(ProductArray)
setProductArray(data)//using this function call we are conveying react that VDOM me productArray is updated so please update the UI and re render the Home component with the updated value of the productArray
// console.log("hi:",ProductArray)
  }
function submitSearch(e){
  e.preventDefault();
  console.log("value fetched",e.target[0].value)
  let i=document.querySelector('input')
  let value=e.target[0].value;
  let data=allData.filter(product =>
    product.title.toLowerCase().includes(value.toLowerCase()))
    i.value=""
  // setInput(e.target[0].value)
  setProductArray(data)
  
}
if(ProductArray.length==0) return(
<ShimmerUi/>)

  return (
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
}

export default Home
