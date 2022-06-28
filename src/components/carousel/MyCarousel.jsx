import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import './mycarousel.css'
import {Image} from 'react-bootstrap'
import Reactpng from '../../assets/React.png'
import Html from "../../assets/html5.png";
import Express from "../../assets/express.png";
import Boostrap from "../../assets/Bootstrap.png";
import Css from "../../assets/csse333.png";
import Github from "../../assets/github.png";
import Heroku from "../../assets/heroku.png";
import Jest from "../../assets/jest-logo.png";
import Mongo from "../../assets/mongodb.png";
import Mui from "../../assets/mui.png";
import Node from "../../assets/node.png";
import Socket from "../../assets/socketio.png";
import Stripe from "../../assets/stripe.png";
import Typescript from "../../assets/typescript.png";
import Vercel from "../../assets/vercel.png";



import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function MyCarousel() {
 

 return (
   <Carousel
     animation="slide"
     className="carousel"
     style={{ color: "white" }}
     NextIcon={<BsChevronRight className="righticon" />}
     PrevIcon={<BsChevronLeft className="lefticon" />}
   >
     <div className="d-flex justify-content-around px-4">
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Reactpng}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Html}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Express}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Boostrap}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Css}></Image>
       </div>
     </div>
     <div className="d-flex justify-content-around px-4">
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Github}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Heroku}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Jest}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Mongo}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Mui}></Image>
       </div>
     </div>
     <div className="d-flex justify-content-around px-4">
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Node}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Socket}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Stripe}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Typescript}></Image>
       </div>
       <div className="d-flex justify-content-center align-items-center  iconcarouselback">
         <Image src={Vercel}></Image>
       </div>
     </div>
   </Carousel>
 );
}

export default MyCarousel;
