import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import {data} from './store/data.js';
import { DataProvider } from "./store/MyContext.jsx";

export default function App() {

  const products=data.products//array of products
  return (
<>
<DataProvider>
      <Navbar></Navbar>
      {/* <Home /> */}
   <Outlet/>
   </DataProvider>
      {/* <Footer/> */}
      </>
  )
}