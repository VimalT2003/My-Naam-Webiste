import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import ModernNavbar from './components/ModernNavbar';
import ContactPage from './components/ContactPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
         <ModernNavbar/>  
         <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/product" element={<ProductCatalog />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
