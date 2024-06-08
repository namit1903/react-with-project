import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from "./components/Home.jsx";
// lazy(()=>import About from "./components/About.jsx";)
import Error from './components/Error.jsx';
import Contact from "./components/Contact.jsx";
import Cart from './components/Cart.jsx';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
let About=lazy(()=>import("./components/About"))
import './index.css'
import ProductDetail from './components/ProductDetail.jsx';
import Kart from './components/Kart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'home',
        element: <Home/>,
      },
     
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path:'gotocart2',
        element: <Cart/>
      },
      {
        path:'/product/:id',
        element: <ProductDetail/>
      },
      {
        path:'gotocart',
        element:<Kart/>
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>...Loading</div>}>
            <About />
          </Suspense>
        )
      },
    ],
    errorElement: <Error/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
)
