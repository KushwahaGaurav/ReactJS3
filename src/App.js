import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contect from "./components/Contect.js";
import ErrorPage from "./components/ErrorPage.js";
import Footer from "./components/Footer.js";
import Carts from "./components/Carts.js";



const Applayout = () => {
    return (
        <div className="app">
          <Header/>
           <Outlet/>
          <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contect",
        element:<Contect/>,
      },
      {
        path:"/carts",
        element:<Carts/>
      }
    ],
    errorElement:<ErrorPage/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout/>)
root.render(< RouterProvider router={appRouter}/>)