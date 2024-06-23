import React from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Stack from "react-bootstrap/Stack";
import cardImage from "./photo.jpg"

const Recipes = () => {
  return (
    <>
      <Navigation />
      <Container className="mt-3">
        <h1>Health Japanese Fried Rice</h1>

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
        {/* card part*/}

        <div className="row column-gap-3">
          <div className="col-8 rounded-4 " style={{ backgroundImage:`url(${cardImage})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
          </div>
          <div className="col rounded-4 " style={{backgroundColor:"#E7FAFE"}}>
          <h4 className="mb-3 mt-3">Nutrition Information</h4>
                <Stack className="border-bottom" direction="horizontal" >
                  <div >Calories</div>
                  <div className="p-2 ms-auto">219.9 kcal</div>
                </Stack>
              

                <Stack className="border-bottom" direction="horizontal" gap={2}>
                  <div >Total Fat</div>
                  <div className="p-2 ms-auto">10.7 g</div>
                </Stack>
              
                <Stack className="border-bottom" direction="horizontal" gap={2}>
                  <div >Protein</div>
                  <div className="p-2 ms-auto">7.9 g</div>
                </Stack>
              
                <Stack className="border-bottom" direction="horizontal" gap={2}>
                  <div >Carbohydrate       </div>
                  <div className="p-2 ms-auto">22.3 g</div>
                </Stack>
              
                <Stack className="border-bottom" direction="horizontal" gap={2}>
                  <div >Cholesterol</div>
                  <div className="p-2 ms-auto">37.4 mg</div>
                </Stack>
              <p className="mt-3">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Recipes;
