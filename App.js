import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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


const AppLaout = () =>{
  return(
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLaout />);