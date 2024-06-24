import React from "react";
import Navigation from "./Navigation";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image26 from "./image26.png";
const Blog = () => {
  return (
    <>
      <Navigation />
      <Container>
        <div className="mx-auto  mt-5 text-center">
          <h1>Blog & Article</h1>
          <p style={{ fontFamily: "initial", fontSize: "10px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>

          <div>
            <input
              type="text"
              class="rounded-3 h-35 p-2 "
              placeholder="Search article, news or recipe..."
              style={{ width: "30%" }}
            />
            <Button
              className="btn btn-dark mt-1"
              style={{ position: "absolute", left: "57%" }}
            >
              Search
            </Button>
          </div>
        </div>

        {/* // part 2 */}
        <div className="mx-auto row m-4 ">
          
          <div className="col-8 row p-0 column-gap-3 ">
            
            {/* photo */}
            <div
              className="col-4 rounded-3"
              style={{
                border: "none",
                backgroundImage: `url(${Image26})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            {/* discription */}
            <div className="col">
              <h4>Crochet Projects for Noodle Lovers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="m-0">
                <spam>Wade Warren</spam>
                <spam className="ms-4 ps-4 border-start">12 November 2021</spam>
              </div>
            </div>
          </div>
          {/* :::: */}
          

          <div className="col-4">jj</div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
