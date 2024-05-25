import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import {data} from './store/data.js'

export default function App() {

  const products=data.products//array of products
  return (
<>
      <Navbar></Navbar>
      <Home />
   

      {/* <Footer/> */}
      </>
  )
}