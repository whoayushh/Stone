
import React from 'react';
import './index.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Find from './pages/Find';


function App() {
  

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/find-us" element={<Find/>}/>

      </Routes>
    </Router>
  )
}

export default App
