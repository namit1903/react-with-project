import React, { useContext } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import ThemeContext from '../Context/ThemeContext';
import { useSelector } from 'react-redux';
import CartRow from './CartRow';
import CartDetail from './CartDetail';
const Kart = () => {
  const items=useSelector(state=>state.cart.itemArray)
  console.log("kart",items)
  let{theme}=useContext(ThemeContext)
  const light=` h-screen w-screen bg-white border-2 border-red`
  const dark=` h-screen w-screen bg-black border-2  m-0`
  return (
    <div className={theme=='light'?light:dark}>
    {/* // <div className={` h-screen w-screen bg-white`}> */}

      <div className="overflow-x-auto bg-blue-400 text-black m-3">
  <table className="table">
    {/* head */}
    <thead className="text-white text-xl font-bold">
      <tr>
       
        <th>PRODUCT</th>
        <th>Description</th>
        <th>Quantity</th>
        <th className="flex gap-2 font-bold text-xl"> <FaCircleArrowUp /> Rating <FaCircleArrowDown /></th>
        <th>Price</th>
        
        <th>
          <label>
           <CartDetail/>
          </label>
        </th>
      </tr>
    </thead>
    <tbody >
    {/* <tbody className='flex flex-col items-center gap-3'> */}
      {/* row 1 */}
      {items.map((item)=>
    <CartRow key={item.id} item={item}/>
    )}
  
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>
</div>
    </div>
  )
}

export default Kart
