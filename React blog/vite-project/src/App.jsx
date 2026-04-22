import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Navbar from './Components/Navbar';
import './App.css';


const App = () => {
  return (
  <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bollywood' element={<Bollywood />} />
    </Routes>
    
  </>
  )
}


export default App