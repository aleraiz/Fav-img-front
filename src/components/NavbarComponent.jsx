import Link from "next/link";
import style from "../styles/NavbarComponent.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Fav-Image</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              href="/
            "
            >
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} href="/user">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/user">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <nav className={style.navbar}>
//   <div>
//     <h1>Fav-Images</h1>
//   </div>
//   <div>
//     <Link className={style.link} href="/">
//       Home
//     </Link>
//     <Link className={style.link} href="/favImages">
//       Images
//     </Link>
//     <Link className={style.link} href="/user">
//       User
//     </Link>
//   </div>
// </nav>
