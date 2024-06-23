import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const Navigation = () => {
  return (
    <>    {/*  */}

<Navbar >
        <Container>
        <Navbar.Brand href="/" style={{fontFamily:"Lobster"}}>Foodieland</Navbar.Brand>
         <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#home"  ><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
            <Nav.Link href="#home"  ><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
            <Nav.Link href="#home"  ><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr style={{margin:"0px"}}/>
    </>
  )
}

export default Navigation