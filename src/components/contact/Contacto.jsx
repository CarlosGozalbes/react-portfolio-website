import React from 'react'
import './contacto.css'
import { BsWhatsapp, BsMailbox } from "react-icons/bs";
import { Row,Col } from 'react-bootstrap';
function Contacto() {
  return (
    <>
      <h6
        style={{ marginBottom: "4rem" }}
        className="  titlesection"
        id="contact"
      >
        Get in touch
      </h6>
      <Row className=" d-flex justify-content-center w-100">
        <div className="contact-card ">
          <h4>Email</h4>
          <h5>carlosfgmendoza@gmail.com</h5>
          <a className="link-contact" href="mailto:carlosfgmendoza@gmail.com">
            <button className="contact-button">
              Send an email <BsMailbox className="mb-1" />
            </button>
          </a>
        </div>

        <div className="contact-card ">
          <h4>WhatsApp</h4>
          <h5>+34-652-898-608</h5>
          <a className="link-contact" href="https://wa.me/652898608">
            <button className="contact-button">
              {" "}
              Send a whatsapp <BsWhatsapp className="mb-1" />
            </button>
          </a>
        </div>
      </Row>
    </>
  );
}

export default Contacto