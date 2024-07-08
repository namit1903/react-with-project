import React, { useContext, useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimmerUi from './ShimmerUi';
import useGetAllData from '../hook/useGetAllData';
import ThemeContext from '../Context/ThemeContext';
import AddedProductInCart from '../store/AddedProductInCart';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
function Home() {
  console.log("home rendered...")
//  let[allData,setAllData]=useState([]);
 let [ProductArray, setProductArray]=useState([]);
 const [query, setQuery] = useState(''); //take the serach 
 const[result, setResult] =useState([]);
 const[flag,setFlag] = useState(false); //
 let {theme}=useContext(ThemeContext);
 let ids=useSelector(state=>state.cart.ids);
//  console.log("here are ids",ids)
 

 //to show list of search result 
  if (flag){
    setProductArray(result);
    setFlag(false)
  
  }

let {products,loading,error}=useGetAllData();
// console.log("get..",products)
console.log("get array product",ProductArray)
console.log("get array product",loading)

useEffect(()=>{
  setProductArray(products);
  console.log("run this useEffect")
},[loading]);
//second useEffect
//for search functionality
useEffect(()=>{
  console.log("useEffect2")
// console.log("allhai na",allData)
  if (query.trim() !== '') {
    const filtered = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    setResult(filtered);
    console.log("data search result:", filtered);
  } else {
    setResult([]); // If query is empty, show all data
  }

},[query]);
function topRatedProduct(){
  console.log("top rated all data")
let data=products.filter((item)=>(item.rating>=4.5));

setProductArray(data)

  }
  //DRY principle
function filterProduct(e,proName){
  console.log("filter product")
  e.target.classList.add('btn-active')

 
let data=products.filter((item)=>(item.category===proName));
setProductArray(data)
if (data.length==0){
  let obj={
    id:"nodata"
  }
  data.push(obj)
}
  }
function submitSearch(e){
  e.preventDefault();
  console.log("value fetched",e.target[0].value)
  let i=document.querySelector('input')
  let value=e.target[0].value;
  let data=products.filter(product =>
    product.title.toLowerCase().includes(value.toLowerCase()));
    i.value="";
 
  setProductArray(data)
  
}
let AddedComponent=AddedProductInCart(ItemCard);
let darkTheme =` bg-black border-[5px] border-red-800 `
let lightTheme =` bg-white border-[5px] border-red-800 `
return(
ProductArray.length==0?
<div className={theme=='light' ? lightTheme : darkTheme}>
<ShimmerUi/>
</div>
:
  (
    <div className={theme=='light' ? lightTheme : darkTheme}>
       <div className="filter flex justify-evenly">
   
    <div className={`options bg-white flex justify-between`}>
    {/* <div className={`options bg-${bg}  flex justify-between`}> */}
    <button className={`btn btn-xs btn-primary`} onClick={(e)=>topRatedProduct(e)}>Top-Rated</button>
    <button className={` btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"beauty")}> Beauty</button>
    <div className="search flex flex-col relative">
    <form onSubmit={submitSearch}>
<input  type="text" placeholder="hunt your stuff...." className='border-2 ' onChange={(e)=>setQuery(e.target.value)}></input>
      <button className={`btn btn-xs btn-secondary`}>hunt items</button>
      </form>{!flag &&
      <ul className= {`absolute top-10 `}>y
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
    <button className={`btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"groceries")}>Groceries</button>
    <button className={` btn btn-xs btn-primary`} onClick={(e)=>filterProduct(e,"fragrances")}>Fragrances</button>
    </div>
   </div>
   <div className="item-container flex flex-wrap gap-3">
   {ProductArray.map((obj) => (
    obj.data=="nodata"?<h1>No data found!!!</h1>:
    (ids.find((id) =>id===obj.id))!=undefined?  <AddedComponent obj={obj} key={`${Date.now()}_${obj.id}`}/>:
          <ItemCard obj={obj} key={`${Date.now()}_${obj.id}`}></ItemCard>
        
        ))}
   </div>
    </div>
  )
)
}

export default Home
