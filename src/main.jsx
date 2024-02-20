import React from 'react'
import ReactDOM from 'react-dom/client'
/* TAILWIND */
import './index.css'
import video from '../video/fondo.mp4'
/* COMPONENTS */
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';



let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className=' relative overflow-y-hidden w-full h-screen'>
    <video src={video} autoPlay loop className=' w-full h-full object-cover -z-50 absolute'></video>
    <Main />
    <Footer />
  </div>
);
