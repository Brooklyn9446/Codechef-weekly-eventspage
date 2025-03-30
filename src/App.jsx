import { useState } from 'react'
import React from 'react';
import Event3 from './assets/Screens/Event3';
import Navbar from './assets/components/Navbar'
import Home from './assets/Screens/Home'
import Create from './assets/Screens/Create';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home></Home>} ></Route>
              <Route path='/Event3' element={<Event3></Event3>} ></Route>
              <Route path='/Create' element={<Create></Create>} ></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
