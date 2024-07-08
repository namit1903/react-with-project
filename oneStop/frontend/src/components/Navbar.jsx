import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";
import MyContext from "../Context/MyContext";
import ThemeContext from "../Context/ThemeContext";
import { useSelector,useDispatch } from "react-redux";


const Navbar = () => {
  const navigate=useNavigate();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const items=useSelector(state=>state.cart.itemArray);
  const dispatch = useDispatch();
const totalItems=useSelector(state=>state.cart.totalProducts);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
    { id: 4, text: "GoToCart" },
  ];
// const {cart}=useContext(MyContext)
const {theme,handleTheme}=useContext(ThemeContext)
function handleThemeChange(){
  handleTheme(theme);
  // localStorage.setItem("theme", theme=='light'?'dark':'light')-->iska alternative useEffect hai
  // console.log(theme) 
}
useEffect(()=>{
  localStorage.setItem('theme',theme)
},[theme])
const darkTheme=`w-full bg-black flex justify-between items-center h-24  mx-auto px-4 text-white border-3 border-red`
const lightTheme=`w-full bg-zinc-300 text-black flex justify-between items-center h-24 mx-auto px-4 `
  return (
    <div className={theme=='light'?lightTheme:darkTheme}>
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        {/* <Link to="/">OneStop.</Link> */}
      <button onClick={()=>navigate('/')}>OneStop.</button>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <>
            <Link key={`${Date.now()}_${item.id}}`} className="flex  items-center p-3 gap-4"to={`/${item.text.toLowerCase()}`}>
            <li
              // key={`${Date.now()}_${item.id}}`}
              className="hover:bg-[#00df9a] p-2 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
             
                {item.text.toLowerCase() === "gotocart" && 
                  <div className="flex ">
                    <div className="relative py-0">
                      <div className=" absolute bottom-3 left-3">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                          {/* {items.length} */}
                          {totalItems}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="file: mt-1 h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                  </div>
                }
                {/* {item.text.toLowerCase()==="home" && navigate('/')}--throttling error */}

                {item.text}
            </li>  </Link>
            
          </>
        ))}
           <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" onClick={handleThemeChange} />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          //hide this ul above 768px i.e above medium size devices
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <Link to="/">OneStop.</Link>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link to={`/${item.text.toLowerCase()}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
