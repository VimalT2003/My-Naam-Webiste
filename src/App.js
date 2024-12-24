import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SafetyFirst from './components/SafetyFirst';
// import Enquiry from './components/Enquiry';
import EnquiryForm from './components/EnquiryForm';
// import Enquiry from './components/Enquiry';
import ContactUs from './components/ContactUs';
// import AccordionItem from './components/AccordionItem';
import AboutUs from './components/AboutUs';
// import MyCarousel from './components/MyCarousel';
import SiteMap from './components/SiteMap';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import ModernNavbar from './components/ModernNavbar';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
       <ModernNavbar/>  
            <Routes>
            <Route path="/" element={<Home />} />
                {/* <Route path="*" element={<h1 className='text-center my-5'>404 - Page Not Found</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/contact" element={<ContactUs />} /> */}
                {/* <Route path="/enquiry" element={<EnquiryForm />} />
                <Route path="/safety" element={<SafetyFirst />} />
                <Route path="/sitemap" element={<SiteMap />} /> */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/product" element={<ProductCatalog />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
     
      {/* <Home/> */}
       {/* Completed packa design */}
       {/* <MyCarousel/> */}
     {/* <ContactUs/> */}
     {/* <SiteMap/> */}
     {/* <Aboutus/> */}
     {/* <AccordionItem/> */}
     {/* <Enquiry/>
     <EnquiryForm/> */}
     {/* <SafetyFirst/> */}
     <Footer/>
    </div>
  );
}

export default App;
