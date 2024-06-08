import React from 'react'

const AddedProductInCart = (Component) => {
  //this took a component as argument and returned a component or arrow ya regular function as argument
  return (props)=>{//this is the arraow funtion retuned so , AddProductInCart is an HOC
    return( <><div className="relative">
    <p className="border-2 bg-orange-500 text-black absolute rounded mt-3">Added to Cart</p>
    <Component {...props}/></div>
    </>)
  }
}

export default AddedProductInCart
