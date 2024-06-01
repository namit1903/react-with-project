import React, { useContext } from 'react'
import MyContext from '../store/MyContext';
// import {data} from '../store/data.js'
const ItemCard =React.memo(({obj})=> {
//  console.log("itemcard is printed")
/*  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
*/
            


// console.log(obj)
let{cart,setCart}=useContext(MyContext);
let{title,image,rating,price,category}=obj;
function handleAdd(){
    setCart([...cart,{id:`${Date.now()}`,title:title,image:image,rating:rating,price:price,category:category}]);
    console.log("handler function called")
}
console.log("itemcart",cart)
  return (
   <>
  
  <div className="flex">
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={`${image}`} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Rating:{rating.rate}</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">category:{category}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
           
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAdd}>Add to cart</button>
        </div>
    </div>
</div>
</div>
   </>
  )
})

export default ItemCard
