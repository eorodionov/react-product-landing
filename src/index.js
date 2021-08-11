import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Problems from './component/Problems';
import App from './App';
import Features from './component/Features';
import McForm2 from './component/McForm2';
import Footer from './component/Footer';
import Image1 from './component/Image1';
import Image2 from './component/Image2';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />
    <Header/>
    <Hero/>
    <About/>
    <Problems/>
    <Image1/>
    <Features />
    <Image2/>
    <McForm2 />
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
