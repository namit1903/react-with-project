import React from 'react'
import { useSelector } from 'react-redux'

const CartDetail = () => {
  let totalProducts = useSelector(state=> state.cart.totalProducts)
  let totalPrice = useSelector(state=> state.cart.totalPrice )
  return (
    <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">cart details</label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <p className="text-2xl text-center my-5"> Cart Details </p>
            <div className="h-96  border-2 border-white text-2xl ">
                <p className="flex justify-between flex-row my-4 mx-2 "> <span>Total Items </span> <span> {totalProducts} </span></p>
                <p className="flex justify-between flex-row my-4 mx-2 "> <span>Total Price  </span> <span> {(totalPrice).toFixed(2)} </span></p>
                <p className="flex justify-between flex-row my-4 mx-2 "> <span>Discount  </span> <span> {(totalPrice * 0.1 ).toFixed(2)} </span></p>
                <p className="flex justify-between flex-row my-4 mx-2 "> <span>Delivery Charge </span> <span> {(totalPrice * 0.05).toFixed(2)}</span></p>

                <p className="flex justify-between flex-row my-4 mx-2 border-t-4 border-white relative top-32 "> 
                  <span>Total Amount  </span> <span> { (totalPrice -(totalPrice * 0.05)).toFixed(2)} </span>
                </p>
            </div> 
            <button className="btn btn-primary mt-4 text-xl"> Proceed To Payment </button>
          </ul>
    </div>
  </div>
  )
}

export default CartDetail
