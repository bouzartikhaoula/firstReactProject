import React from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import nwimg from "./nwimg.png";
const AboutUs = () => {
  return (
    <>
      <Navigation />
      <Container className="text-center">
        <h1>Full Guide to Becoming a Professional Chef</h1>
        <p>
          <span className=" p-1 text-secondary">John Smith</span>
          <span className="p-1 text-secondary border-start">15 March 2022</span>
        </p>
        <small className="mt-2 text-secondary p-4 ">
         
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          
        </small>
        <div
          className="rounded-4"
          style={{
            height: "334px",
            border: "none",
            backgroundImage: `url(${nwimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </Container>
    </>
  );
};

export default AboutUs;
