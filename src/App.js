import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navibar from './components/shared/Navibar';
import Login from './components/pages/SignIn';
import HomeAse from './components/pages/HomeAse';
import HomeClient from './components/pages/HomeClient';
import FormProduct from './components/pages/FormProduct';
import ReportePedido from './components/pages/ReportePedido';

function App() {
 
  return (
    <div className="container">
    <Navibar /><br></br>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/asesor" element={<HomeAse />} />
        <Route exact path="/cliente" element={<HomeClient />} />
        <Route exact path="/productos" element={<FormProduct />} />
        <Route exact path="/reportes" element={<ReportePedido />} />
      </Routes>
    </Router>
    </div >
  );
}

export default App;
