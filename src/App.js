import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Types from './pages/Types';
import Add from './pages/Add';
import Home from './pages/Home';
import Cart from './pages/Cart';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/types" element={<Types />} />
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
