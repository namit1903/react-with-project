import { createContext, useState } from "react";

const MyContext=createContext();

export function DataProvider({children}){
  const [cart,setCart]=useState([]);

  return(
    <MyContext.Provider value={{cart,setCart}}>
    {children}
    </MyContext.Provider>
  )
}
export default MyContext