import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'


const TopBar = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
            <Navbar.Brand style={{ margin: "5px 800px 0 20px" }} href="#home">
                <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
                    <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default TopBar