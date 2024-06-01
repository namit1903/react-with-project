import { useContext } from "react"
import MyContext from "../store/MyContext";

export default function CartItem({id,title,image,price,category,rating}){
const {cancleItem}=useContext(MyContext)

  return(
    <>
  <div className="cartItems">
  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={`${image}`} style={{ height:'300px'}}alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Rating:{rating.rate}</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">category:{category}</span>
        </div>
    <div className="flex justify-around">
    <div className="card-actions justify-start items-">
    <button className="btn btn-outline btn-error" onClick={()=>{console.log(id);cancleItem(id)}}>cancle</button>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>
  </div>
    </>)
  }