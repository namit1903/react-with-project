import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimmerUi from './ShimmerUi';
import useGetAllData from '../hook/useGetAllData';
function Home() {
  console.log("home rendered")
 let[allData,setAllData]=useState([]);
 let [ProductArray, setProductArray]=useState(allData);
 const [query, setQuery] = useState(''); //take the serach 
 const[result, setResult] =useState([]);
 const[flag,setFlag] = useState(false); //
  // console.log("ye fetched array hai",allData)
  
  
  if (flag){
    setProductArray(result);
    setFlag(false)
  
  }
 
  let getData=async()=>{
try{
    let data= await fetch("https://dummyjson.com/products");
   
    let obj=await data.json();
    console.log("get..",obj)
    setAllData(obj.products);
setProductArray(obj.products)
}
    catch(error){
      console.log("fetching error",error)
    }
  }
  useEffect(()=>{
    getData();
  },[]);
 
//  console.log("useEffect1 ended")
// },[])

//second useEffect
//for search functionality
useEffect(()=>{
  console.log("useEffect2")
console.log("allhai na",allData)
  if (query.trim() !== '') {
    const filtered = allData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    setResult(filtered);
    console.log("data search result:", filtered);
  } else {
    setResult([]); // If query is empty, show all data
  }

},[query]);
function topRatedProduct(){
  console.log("top rated all data")
let data=allData.filter((item)=>(item.rating.rate>=4.5));
// console.log("top rated",data)
// setInput(ProductArray)
setProductArray(data)
// console.log("product array",ProductArray)
  }
  //DRY principle
function filterProduct(e,proName){
 
  e.target.classList.add('btn-active')

  // console.log("fiter product",e.target.classList)
let data=allData.filter((item)=>(item.category===proName));
setProductArray(data)
  }
function submitSearch(e){
  e.preventDefault();
  console.log("value fetched",e.target[0].value)
  let i=document.querySelector('input')
  let value=e.target[0].value;
  let data=allData.filter(product =>
    product.title.toLowerCase().includes(value.toLowerCase()));
    i.value="";
 
  setProductArray(data)
  
}
// if(ProductArray.length==0) return(
// <ShimmerUi/>)
// else
// console.log("jsx print hoga",ProductArray)
return(
ProductArray.length==0?
 (<ShimmerUi/>): (
    <div>
       <div className="filter m-5 flex justify-evenly">
   
    <div className="options bg-black  flex justify-between">
    <button className={`btn btn-xs btn-primary`} onClick={(e)=>topRatedProduct(e)}>Top-Rated</button>
    <button className={` btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"electronics")}> Electronics</button>
    <div className="search flex flex-col relative">
    <form onSubmit={submitSearch}>
<input  type="text" placeholder="hunt your stuff...." className='border-2 ' onChange={(e)=>setQuery(e.target.value)}></input>
      <button className={`btn btn-xs btn-secondary`}>hunt items</button>
      </form>{!flag &&
      <ul className= {`absolute top-10 `}>
        {
        // console.log("jsx print hoga")
        result.map((item, index) => (
          <li className="z-1 bg-black"key={index}><button className="hover:bg-white" onClick={()=>{
            // setQuery(item.title)
            setFlag(true)}
          }>{item.title}</button></li> // Adjust based on your API response structure
        ))}
      </ul>}
    </div>
    <button className={`btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"men's clothing")}>Men clothing</button>
    <button className={` btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"women's clothing")}>Women Clothing</button>
    </div>
   </div>
   <div className="item-container flex flex-wrap gap-3">
   {ProductArray.map((obj) => (
          <ItemCard obj={obj} key={`${Date.now()}_${obj.id}`}></ItemCard>
        ))}
   </div>
    </div>
  )
)
}

export default Home
