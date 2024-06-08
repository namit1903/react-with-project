import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
function ShimmerUi() {
  const{theme}=useContext(ThemeContext);
  // const dark=
  return (<>
    <div className="flex justify-center ">
  <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>

    </div>
    <div className=" flex flex-wrap gap-6">
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
    <div className="card w-96 h-96  bg-orange-100 shadow-xl flex-row justify-evenly ">
    <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

   </div>
   {console.log("shimmrer ui last line")}
   </div>

    </>
  )
}

export default ShimmerUi
