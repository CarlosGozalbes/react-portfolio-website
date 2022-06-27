import React from 'react'
import './style.css'
import Image from "react-bootstrap/Image";
import Foto from '../../assets/foto.jpg'
function About() {
  return (
    <>
      <div className="about-section">
        <div className="hello d-flex justify-content-center align-items-center">
          Hello, I'm an Full Stack ReactJS developer based in Spain!
        </div>
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
        </div>
        <h6
          className="mt-4"
          style={{
            color: "white",
            marginLeft: "33vw",
            textDecoration: "underline",
            width:'fit-content'
          }}
        >
          About
        </h6>
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
      </div>
    </>
  );
}

export default About