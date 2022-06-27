import React from 'react'
import {Row,Col,Container,Image} from 'react-bootstrap'
import './projects.css'
import Whatsapp from '../../assets/whatsapp.JPG'
import { BsGithub } from "react-icons/bs";
function Projects() {
  return (
    <>
      <h6
        className="mt-4"
        style={{
          color: "white",
          marginLeft: "33vw",
          textDecoration: "underline",
        }}
      >
        Projects
      </h6>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} className="mt-4">
            <div className="project-card">
              <h5 className="ml-3 pt-3">
                {" "}
                <b> Whatsapp web clone</b>
              </h5>
              <Image className="mb-3" src={Whatsapp}></Image>
              <div
                className="my-3 w-75 m-auto"
                style={{ minHeight: "2px", backgroundColor: "black" }}
              ></div>
              <p className="p-3">
                WhatsApp web clone using React.js, socket.io, TS and jester
              </p>
              <div className="d-flex justify-content-between px-3 pb-3">
                <button className="visit-button visit-fe">
                  Visit FE &nbsp;&nbsp;
                  <BsGithub className="mb-1" />
                </button>
                <button className="visit-be visit-button">
                  Visit BE &nbsp;&nbsp; <BsGithub className="mb-1" />
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mt-4">
            <div className="project-card">
              <h5 className="ml-3 pt-3">
                {" "}
                <b> Whatsapp web clone</b>
              </h5>
              <Image className="mb-3" src={Whatsapp}></Image>
              <div
                className="my-3 w-75 m-auto"
                style={{ minHeight: "2px", backgroundColor: "black" }}
              ></div>
              <p className="p-3">
                WhatsApp web clone using React.js, socket.io, TS and jester
              </p>
              <div className="d-flex justify-content-between px-3 pb-3">
                <button className="visit-button visit-fe">
                  Visit FE &nbsp;&nbsp;
                  <BsGithub className="mb-1" />
                </button>
                <button className="visit-be visit-button">
                  Visit BE &nbsp;&nbsp; <BsGithub className="mb-1" />
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mt-4">
            <div className="project-card">
              <h5 className="ml-3 pt-3">
                {" "}
                <b> Whatsapp web clone</b>
              </h5>
              <Image className="mb-3" src={Whatsapp}></Image>
              <div
                className="my-3 w-75 m-auto"
                style={{ minHeight: "2px", backgroundColor: "black" }}
              ></div>
              <p className="p-3">
                WhatsApp web clone using React.js, socket.io, TS and jester
              </p>
              <div className="d-flex justify-content-between px-3 pb-3">
                <button className="visit-button visit-fe">
                  Visit FE &nbsp;&nbsp;
                  <BsGithub className="mb-1" />
                </button>
                <button className="visit-be visit-button">
                  Visit BE &nbsp;&nbsp; <BsGithub className="mb-1" />
                </button>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Projects