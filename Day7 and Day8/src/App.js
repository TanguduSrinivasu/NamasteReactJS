import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestarauntMenu from "./components/RestarauntMenu.js";
import Profile from "./components/ProfileFunComp.js";

const AppLayout = () => {
  return (
    // React.Fragment is a Component
    // JSX can have only one parent
    <> 
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/> ,
    errorElement : <Error/>,
    children : [
      {
        path : '/',              
        element : <Body/>
      },

      {
        path : '/about',                         // '/' means from the root
        element : <About/>,
        children : [
          {
            path : 'profile',              // if we give /profile this means localhost:1234/profile if it only profile then this means localhost:1234/about/prfile
            element : <Profile/>
          }
        ]
      },
    
      {
        path : '/contact',
        element : <Contact/>
      },

      {
        path : '/restaraunt/:id',
        element : <RestarauntMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
