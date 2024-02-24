import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
// import { ChakraProvider } from "@chakra-ui/react";

import App from './App.jsx'
import './index.css'
import Home from "./routes/home"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider> 
    <BrowserRouter> 
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/feed" element={<App/>} />
      </Routes>
    </BrowserRouter>
   </ChakraProvider>
  </React.StrictMode>,
)
