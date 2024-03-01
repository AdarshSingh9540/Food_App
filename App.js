import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Shimmer from "./src/components/Shimmer";
import Menu from "./src/components/Menu";
import { Provider } from "react-redux";
import Store from "./src/utils/store";
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
    <Provider store={Store}>
    <Header />
    {/* <Body /> */}
    <Outlet/>
    <Footer />
    </Provider>
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