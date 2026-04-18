import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigation } from "react-router-dom";

import './App.css'

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import treatments from "./components/pages/treatments";
import contactUs from "./components/pages/contactUs";
import photogallery from "./components/pages/photogallery";
function App() {

  return (
    <>
          <Router>

              <Routes>
                  <Route path="/" element={<Protected Component={Home} />} />
                  <Route path="/AboutUs" element={<Protected Component={AboutUs} />} />
                  <Route path="/Treatments" element={<Protected Component={treatments} />} />
                  <Route path="/ContactUs" element={<Protected Component={contactUs} />} />
                  <Route path="/Photogallery" element={<Protected Component={photogallery} />} />
                  
              </Routes>


          </Router>

    </>
  )
}

export default App



export function Protected({ Component }) {
    return (
       <>
            <Header />         
            <Component />
            <Footer />
        </> 
       
    );
}