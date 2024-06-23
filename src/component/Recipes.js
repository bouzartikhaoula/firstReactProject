import React from "react";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils , faStopwatch,faUser} from '@fortawesome/free-solid-svg-icons'

const Recipes = () => {
  return (
    <>
      <Navigation />
      <Container className="mt-5">
        <h1>Health Japanese Fried Rice</h1>
        <ul class="list-group list-group-horizontal border-0">
          
  <li class="p-4" style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}><span> <FontAwesomeIcon icon={faUser} /> </span> <span><p className="mb-0">John Smith</p><p  class="text-body-secondary">15 March 2022</p></span></li>
  <li class="p-4 border-start "style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}><span> <FontAwesomeIcon icon={faStopwatch}/> </span> <span><p className="mb-0"> PREP TIME</p><p  class="text-body-secondary">15 Minutes</p></span></li>
  <li class="p-4 border-start"style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}><span> <FontAwesomeIcon icon={faStopwatch}/> </span> <span><p className="mb-0"> COOK TIME</p><p  class="text-body-secondary">15 Minutes</p></span></li>
  <li class="p-4 border-start"style={{listStyle:"none", fontSize:"10px",width:"135px" ,height:"fit-content"}}><span> <FontAwesomeIcon icon={faUtensils} /> </span> <span>Chicken</span></li>
</ul>
      </Container>
    </>
  );
};

export default Recipes;
