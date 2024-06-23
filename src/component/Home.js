import React from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import cardImage from "./cardImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils , faStopwatch} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <Navigation />
      <Container className="rounded-5 mt-4" >
        <CardGroup style={{ height: "440px" }} >
          <Card className="rounded-start-5 p-4" style={{    border:"none",backgroundColor:"#E7FAFE"}}>
            <Card.Body>
              <span class="rounded-pill p-2 mb-4" style={{width:"130px" , backgroundColor:"white" ,fontFamily:"Inter" ,fontSize:"10px"}}>
                Hot Recipes
              </span>
              <h1 className="mt-4" >Spicy delicious <br/> chicken wings</h1>
              <Card.Text className="">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
              </Card.Text>
              <span class="rounded-pill p-2 " style={{width:"130px" , backgroundColor:"#80808030" ,fontFamily:"Inter" ,fontSize:"10px"}}>
              <FontAwesomeIcon icon={faUtensils} />  30 Minutes
              </span>
              <span class="rounded-pill p-2 m-4" style={{width:"130px" , backgroundColor:"#80808030" ,fontFamily:"Inter" ,fontSize:"10px"}}>
              <FontAwesomeIcon icon={faStopwatch} /> Chicken 
              </span>
            </Card.Body>
          </Card>
          <Card className="rounded-end-5" style={{    border:"none",backgroundImage:`url(${cardImage})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          <div style={{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgb(231 250 254 / 21%)' // طبقة نصف شفافة فوق الصورة
      }} />
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
