import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import {data} from './Context/data.js';
import { DataProvider } from "./Context/MyContext.jsx";
import ThemeContext, { ThemeProvider } from "./Context/ThemeContext.jsx";
import Store from "./store/Store.jsx";
import { Provider } from "react-redux";
// import '/App.css'

export default function App() {
// const {theme}=useContext(ThemeContext);
  const products=data.products//array of products
  return (
    <Provider store={Store}>
<ThemeProvider>
<DataProvider>
  {/* <div className={theme=="light"?"dark":"light"}> */}
      <Navbar></Navbar>
      {/* <Home /> */}
   <Outlet/>
   {/* </div> */}
   </DataProvider>
      {/* <Footer/> */}
      
      </ThemeProvider>
      </Provider>
      
  )
}