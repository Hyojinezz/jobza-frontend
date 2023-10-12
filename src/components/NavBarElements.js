import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from '../images/부산잡자로고만.png';
import logo_letter from '../images/부산잡자글자만.png';

const NavBarElements = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="LOGO"
            width="50"
            height="75"
            className="d-inline-block align-top"
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={logo_letter}
              alt="LOGO"
              width="150"
              height="40"
              className="d-inline-block align-top"
              style={{ marginLeft: '20px'}} 
            />
          </div>
        </div>


        </Navbar.Brand>

        <Form className="d-flex mx-auto">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ width: '400px' }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>



        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1" className="ms-2">신입공채</Nav.Link>
            <Nav.Link href="#action2" className="ms-2">채용정보</Nav.Link>
            <NavDropdown title="어쩌구저쩌구" id="navbarScrollingDropdown" className="ms-2">
              <NavDropdown.Item href="#action3">무엇을</NavDropdown.Item>
              <NavDropdown.Item href="#action4">넣을까여</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">야호</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Login" className="ms-2" style={{marginRight:'60px'}}>로그인</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarElements;