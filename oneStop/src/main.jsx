import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Error from './components/Error.jsx';
import Contact from "./components/Contact.jsx";
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

import './index.css'
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
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
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
