
import { useSelector,useDispatch } from 'react-redux';
import useGetSingleProduct from '../hook/useGetSingleProduct';
import { addCart } from '../store/CartSlice';
import ThemeContext from '../Context/ThemeContext';
import { useContext, useState } from 'react';

import ReviewComponent from './ReviewComponent';

const ProductDetail = () => {
 
  console.log("print")
  let ids=useSelector(state=>state.cart.ids);
let dispatch=useDispatch();
let obj=useGetSingleProduct()
let {theme}=useContext(ThemeContext);
console.log(theme)
let [showIndex,setShowIndex]=useState(null);
console.log("show", showIndex)
if(obj==null){return(<h1>Loading...............</h1>)};
let {title,price,description,images,rating,id,reviews}=obj;
// let ids=useSelector(state=>state.cart.ids);
let light=`w-[100vw] h-[90vh] border-t-2 bg-zinc-300`;
let dark=`w-[100vw] h-[90vh] bg-black border-t-2 `;

  return (
    
     
    <div className={theme=='dark'?dark:light}>
         
    <div className="card card-side w-[70vw] h-[50vh] border-1 mt-4 border-red-500 mx-auto bg-white text-black shadow-xl">
    {ids.find(itemId=>itemId==id)!=undefined?<p className="border-2 bg-orange-500 text-black absolute rounded mt-3">Added to Cart</p>:<></>}
  <figure className='w-[50vw]'>
    <div className="w-64 carousel rounded-box hover:play-carousel cursor-pointer">
  <div className="carousel-item w-full">
  {images.map(imgAdd=>  {return(
    <div className="carousel-item w-full"><img src={imgAdd} className="w-full" alt="Tailwind CSS Carousel component" /></div>)})}
  </div> 

</div></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <button className=' btn btn-primary w-15 h-[5px]'>Price:{price}</button>
    <p>{description}</p>
    <button className=' btn btn-primary w-15 h-[5px]'>Ratings:{rating}</button>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{dispatch(addCart(obj))}}>Confirm To BUY</button>
    </div>
  </div>
</div>
<div className="border-red-400 border-2 w-[70vw] m-auto min-h-[20vh] mt-6" >
{reviews.map((item,idx)=>(<ReviewComponent obj={item} showIndex={showIndex} setShowIndex={setShowIndex} idx={idx}/>))}
 </div></div>
  )
}

export default ProductDetail
