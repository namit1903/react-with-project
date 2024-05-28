import { useContext } from "react";
import MyContext from "../store/MyContext";
import Bill from "./Bill";
import CartItem from "./CartItem";

function Cart(){
  const {cart} =useContext(MyContext); 
 
  return(<>
  {!cart?<h1 className="h-76 bg-red-50">No Product selected</h1>:
 <div className="cart flex gap-2 justify-around">
  <div className="items">
    {cart.map(item=>
  <CartItem  key={`${Date.now()}`}title={item.title} image={item.image} rating={item.rating} price={item.price} category={item.category}/>)}
  </div>
 
  <Bill/>
 </div>}
  </>)
}
export default Cart;
