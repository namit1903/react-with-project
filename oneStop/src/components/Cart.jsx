import { useContext } from "react";
import MyContext from "../store/MyContext";
import Bill from "./Bill";
import CartItem from "./CartItem";

function Cart(){
  const {cart} =useContext(MyContext); 
 console.log("cart bill",cart)
  return(<>
  {cart.length==0?<h1 className="h-80 font-bolds bg-red-50 text-center ">No Product selected</h1>:
 <div className="cart flex gap-2 justify-around">
  <div className="items flex gap-3 flex-wrap">
    {cart.map(item=>
  <CartItem  key={`${Date.now()}`}title={item.title} image={item.image} rating={item.rating} price={item.price} category={item.category}/>)}
  </div>
 
  <Bill/>
 </div>}
  </>)
}
export default Cart;
