import React from 'react'
import './style.css'
import {Container} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import Curriculo from "../../assets/carlosgozalbesfrontend.pdf";
import Foto from '../../assets/foto.jpg'

import {BsFileEarmarkPdfFill} from 'react-icons/bs'

function About() {
  
  return (
    <>
      <div className="about-section" id='about'>
        <div className="hello d-flex justify-content-center align-items-center">
          Hello, I'm an Full Stack ReactJS developer based in Spain!
        </div>
        <Container className='px-2'>
        <div className="avatar d-flex justify-content-center mt-4">
          <div className="d-flex flex-column align-self-center  nombre">
            <p className="nombreeee">Carlos Gozalbes Mendoza </p>
            <p>Digital Craftsman</p>
          </div>
          <Image
            className=""
            src={Foto}
            roundedCircle
            style={{ height: "20vh", width: "20vh" }}
          />
        </div></Container>
        <p className="mt-4 titlesection" id="about">
          About
        </p>
        <p
          style={{ color: "white", width: "60ch", margin: "auto" }}
          className="mt-2"
        >
          I love creating products with value and enjoyable by people. Curious
          and eager to learn and face challenges that level me up. Passionate
          about codding, putting pieces together and solving problems is so
          fascinating I will never get use to it. Want to become a reliable
          developer who people enjoy team-up with, become helpful and a go-to
          person to solve problems
        </p>
        <div style={{marginBottom: '4rem'}} className="d-flex justify-content-center mt-3">
          <button className="downloadpdf">
            {" "}
            <a className="linkdownloadcv" /* href={Curriculo} download={Curriculo} */>
              Download CV <BsFileEarmarkPdfFill className='mb-1'/>{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default About