import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home'
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';
import Servies from './Component/Servies';
import Nav from './Navbar/Nav';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='servies' element={<Servies />}></Route>
          <Route path='contactus' element={<Contactus />}></Route>
          <Route path="aboutus" element={<Aboutus />}></Route>



        </Routes>
       


      </BrowserRouter>





    </div>
  );



}


export default App;