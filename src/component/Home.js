import React from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import cardImage from "./cardImage.jpg";

const Home = () => {
  return (
    <>
      <Navigation />
      <Container className="rounded-5 mt-4" style={{ height: "440px" }}>
        <CardGroup>
          <Card>
            <Card.Body>
              {/* <Card.Title>Card title</Card.Title> */}
              <span class="rounded-pill " style={{width:"130px" , backgroundColor:"red" ,fontFamily:"Inter"}}>
                Hot Recipes
              </span>

              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <img className="rounded-end-5" src={cardImage} alt="" />
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;
