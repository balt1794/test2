import React from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Typography from "@material-ui/core/Typography";
import './index.css'

const Navigation = () => {

return (
<>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="logo-brand" href="/"><img src={"images/logo50.png"} alt="logo" width={100} height={50}></img> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Button href="/form" variant="outline-success" disableElevation><Typography>Post a job</Typography></Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
}

export default Navigation;
