import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
function NavBar() {
  const handleLogout = () => {
    localStorage.removeItem("user");
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
        <img src={logo} alt="" className="navbar-logo"/>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/sports">
            Sports
          </Nav.Link>
          <Nav.Link as={Link} to="/myBookings">
            My Bookings
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={handleLogout}
            className="logout-link"
            to="/"
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
