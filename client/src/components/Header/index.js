import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <Navbar collapseOnSelect expand="lg" id="image" variant="light">
      <Container>
        <Navbar.Brand id="changeFontSize" href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="changeFontSize" className="me-auto">
            <Nav.Link id="textColor" href="/about">About</Nav.Link>
            <Nav.Link id="textColor" href="/blog">Blog</Nav.Link>
            <Nav.Link id="textColor" href="/memories">Memories</Nav.Link>
            <Nav.Link id="textColor" href="/contact">Contact</Nav.Link>
          </Nav>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header className="bg-info text-light mb-4 py-3 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <div>
    //       <Link className="text-light" to="/">
    //         <h1 className="m-0">Home</h1>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link className="text-light" to="/about">
    //         <h1 className="m-0">About</h1>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link className="text-light" to="/blog">
    //         <h1 className="m-0">Blog</h1>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link className="text-light" to="/memories">
    //         <h1 className="m-0">Memories</h1>
    //       </Link>
    //     </div>
    //     <div>
    //       <Link className="text-light" to="/contact">
    //         <h1 className="m-0">Contact</h1>
    //       </Link>
    //     </div>
    //     <div>
    //       {Auth.loggedIn() ? (
    //         <>
    //           <Link className="btn btn-lg btn-info m-2" to="/me">
    //             {Auth.getProfile().data.username}'s profile
    //           </Link>
    //           <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link className="btn btn-lg btn-info m-2" to="/login">
    //             Login
    //           </Link>
    //           <Link className="btn btn-lg btn-light m-2" to="/signup">
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </header>


  );
};

export default Header;
