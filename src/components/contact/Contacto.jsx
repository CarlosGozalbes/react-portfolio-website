import React from 'react'
import './contacto.css'
import { BsWhatsapp, BsMailbox } from "react-icons/bs";
import { Row,Col } from 'react-bootstrap';
function Contacto() {
  return (
    <>
      <h6
        className="mt-4 mb-0"
        style={{ color: "white", margin: "33vw", textDecoration: "underline" }}
      >
        Get in touch
      </h6>
      <Row className=" d-flex justify-content-center">
        
          <div className="contact-card mt-4">
            <h4>Email</h4>
            <h5>carlosfgmendoza@gmail.com</h5>
            <a className="link-contact" href="mailto:carlosfgmendoza@gmail.com">
              <button className="contact-button">
                Send an email <BsMailbox />
              </button>
            </a>
          </div>
        
        
          <div className="contact-card mt-4">
            <h4>WhatsApp</h4>
            <h5>+34-652-898-608</h5>
            <a className="link-contact" href="https://wa.me/652898608">
              <button className="contact-button">
                {" "}
                Send an whatsapp <BsWhatsapp />
              </button>
            </a>
          </div>
        
      </Row>
    </>
  );
}

export default Contacto