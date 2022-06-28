import './mainpage.css'
import React from 'react'
import MyNavBar from '../../components/mynavbar/MyNavBar.jsx'
import { Suspense } from 'react';
import MyFooter from '../../components/myfooter/MyFooter';
import About from '../../components/about/About';
import Doog from './Doog';
import Projects from '../../components/projects/Projects';
import Contacto from '../../components/contact/Contacto';
import MyCarousel from '../../components/carousel/MyCarousel';


function mainPage() {
  return (
    <>
      <MyNavBar />
      <div style={{ height: "4.5rem" }}></div>
      <Suspense fallback={<div className="">loading</div>}>
        <Doog />
      </Suspense>
      
      <About />
      <MyCarousel/>
      <Projects/>
      <Contacto />
      <MyFooter />
    </>
  );
}

export default mainPage