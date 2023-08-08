import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import HomeScreen from "../Pages/HomeScreen";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Landing from "../Pages/Landing";
import HomePage from "../Pages/HomePage";

export const route = createBrowserRouter([
   {
      path: '/',
      element: <Layout/>,
      children: [
         {
            index: true,
            element: <HomeScreen/>
            
         },
         {
           
            path: '/1s',
            element: <Landing/>
         },
         {
           
            path: '/',
            element: <HomePage/>
         },

         {
           
            path: 'about',
            element: <About/>
         },

         {
           
            path: 'services',
            element: <Services/>
         },
         {
           
            path: '/contact',
            element: <Contact/>
         },
         {
           
            path: '/login',
            element: <LogIn/>
         },

         {
            path: '/signup',
            element: <SignUp/>
         }
      ]
     
         
      
   }
])