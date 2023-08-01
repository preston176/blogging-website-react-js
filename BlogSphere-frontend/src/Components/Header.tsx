
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">BlogSphere</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/post">Write a blog</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
