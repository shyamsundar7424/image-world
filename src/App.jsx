import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="result" element={<Result/>} />
        <Route path="/buy" element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </Router>
      
    </div>
  )
}

export default App
