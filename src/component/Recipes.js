import React from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Recipes = () => {
  return (
    <>
      <Navigation />
      <Container className="mt-5">
        <h1>Health Japanese Fried Rice</h1>
        {/* <ul class="list-group list-group-horizontal border-0">
          
  <li class="p-4" style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}>
  <span>  </span> <span></span></li>

  <li class="p-4 border-start "style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}>
  <span>  </span> <span></span></li>
  <li class="p-4 border-start"style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}>
  <span>  </span> <span></span></li>
  <li class="p-4 border-start"style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}>
  <span>  </span> <span></span></li>
</ul> */}
        <div class="row mt-4 ">
          <div class="col-sm-2  row ">
            <div class="col-sm-3 h3 ">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div class="col  " style={{ fontSize: "11px" }}>
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                John Smith
              </p>
              <p class="text-body-secondary">15 March 2022</p>
            </div>
          </div>
          <div class="col-sm-2  row">
            <div class="col-sm-3 h3 ">
              <FontAwesomeIcon icon={faStopwatch} />
            </div>
            <div class="col  " style={{ fontSize: "11px" }}>
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                {" "}
                PREP TIME
              </p>
              <p class="text-body-secondary">15 Minutes</p>
            </div>
          </div>
          <div class="col-sm-2  row">
            <div class="col-sm-3 h3 ">
              <FontAwesomeIcon icon={faStopwatch} />
            </div>
            <div class="col  " style={{ fontSize: "11px" }}>
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                {" "}
                COOK TIME
              </p>
              <p class="text-body-secondary">15 Minutes</p>
            </div>
          </div>
          <div class="col-sm-2  row">
            <div class="col-sm-3 h3 ">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <div class="col  " style={{ fontSize: "11px" }}>
              <p className="mb-0 " style={{ fontWeight: "bold" }}>
                Chicken
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Recipes;
