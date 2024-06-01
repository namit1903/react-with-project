import { createContext, useState } from "react";

const MyContext=createContext();

export function DataProvider({children}){
  const [cart,setCart]=useState([]);
  function cancleItem(key){
    console.log(cart,key)
const newCart=cart.filter(item=>item.id!=key)
setCart(newCart)
console.log("clicked cancle")
  }

  return(
    <MyContext.Provider value={{cart,setCart,cancleItem}}>
    {children}
    </MyContext.Provider>
  )
}
export default MyContext