import React from 'react'
import {Row,Col,Container,Image} from 'react-bootstrap'
import './projects.css'
import Whatsapp from '../../assets/whatsapp.JPG'
import Linkedin from "../../assets/linkedinclone.jpg";
import Football from "../../assets/footballapp.JPG";
import { BsGithub } from "react-icons/bs";
function Projects() {
  return (
    <>
      <h6
        className=" titlesection"
        style={{ marginTop: "4rem", marginBottom: "4rem" }}
        id="projects"
      >
        Projects
      </h6>
      <Container style={{ marginBottom: "4rem" }}>
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
                  <a
                    className="repolink"
                    href="https://github.com/CarlosGozalbes/whatsapp-fe-clone"
                    target="_blank"
                  >
                    {" "}
                    Visit FE &nbsp;&nbsp;
                    <BsGithub className="mb-1" />
                  </a>
                </button>
                <button className="visit-be visit-button">
                  <a
                    className="repolink"
                    href="https://github.com/CarlosGozalbes/whatsapp-fe-clone"
                    target="_blank"
                  >
                    {" "}
                    Visit BE &nbsp;&nbsp; <BsGithub className="mb-1" />
                  </a>{" "}
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mt-4">
            <div className="project-card">
              <h5 className="ml-3 pt-3">
                {" "}
                <b> Linkedin clone</b>
              </h5>
              <Image className="mb-3" src={Linkedin}></Image>
              <div
                className="my-3 w-75 m-auto"
                style={{ minHeight: "2px", backgroundColor: "black" }}
              ></div>
              <p className="p-3">
                Linkedin clone using React.js and MongoDB for user and comments
              </p>
              <div className="d-flex justify-content-between px-3 pb-3">
                <button className="visit-button visit-fe">
                  <a
                    className="repolink"
                    href="https://github.com/May-Hemade/linkedin-clone"
                    target="_blank"
                  >
                    Visit FE &nbsp;&nbsp;
                    <BsGithub className="mb-1" />
                  </a>
                </button>
                <button className="visit-be visit-button">
                  <a
                    className="repolink"
                    href="https://github.com/May-Hemade/linkedin-BE"
                    target="_blank"
                  >
                    {" "}
                    Visit BE &nbsp;&nbsp; <BsGithub className="mb-1" />
                  </a>{" "}
                </button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mt-4">
            <div className="project-card">
              <h5 className="ml-3 pt-3">
                {" "}
                <b> Football app</b>
              </h5>
              <Image className="mb-3" src={Football}></Image>
              <div
                className="my-3 w-75 m-auto"
                style={{ minHeight: "2px", backgroundColor: "black" }}
              ></div>
              <p className="p-3">
                Football app to find games in you local area, using React.js,
                MongoDB and leaflet
              </p>
              <div className="d-flex justify-content-between px-3 pb-3">
                <button className="visit-button visit-fe">
                  <a
                    className="repolink"
                    href="https://github.com/CarlosGozalbes/football-app"
                    target="_blank"
                  >
                    {" "}
                    Visit FE &nbsp;&nbsp;
                    <BsGithub className="mb-1" />
                  </a>
                </button>
                <button className="visit-be visit-button">
                  <a
                    className="repolink"
                    href="https://github.com/CarlosGozalbes/football-app-backend"
                    target="_blank"
                  >
                    {" "}
                    Visit BE &nbsp;&nbsp; <BsGithub className="mb-1" />
                  </a>{" "}
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