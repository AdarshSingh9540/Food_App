import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";
import Menu from "./components/Menu";
// import Cart from "./Cart";
// react element
// const header = React.createElement(
//   "h1",
//   {
//     id:"title",
//     key: "h2",
//   },
//   "Namaste React",
//   " Adarsh singh"
// );

// jsx
// const Heading  = (
//   <h1 key="h1" id="title">
//   Hi i am adarsh singh
//   </h1>
// )

// functional component 

// const Heading2 = () =>(
//   <>
//     {Heading}
//    <h2>I am a software eng.</h2>
//   </>
// )

// const burgerKing = {
//   name:"Burger King",
//   image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/60a088aa1f2ff8cf85db89fa398883ce",
//   cusines:["burger" , "American"],
//   rating:"4.2"
// }

const Instamart = lazy(() => import("./components/Instamart")); 

const AppLaout = () =>{
  return(
    <>
    <Header />
    {/* <Body /> */}
    <Outlet/>
    <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLaout/>,
    errorElement:<Error/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
         element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart />
      }
      ,
      {
        path:"/restaurant/:resId",
        element:<Menu />
      },
      {
        path:"/Instamart",
        element:(<Suspense fallback={<Shimmer/>} ><Instamart/></Suspense>)
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);