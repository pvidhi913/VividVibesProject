import 'bootstrap/dist/css/bootstrap.min.css';  
import {
    Outlet,
  } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
    Nav,
    Navbar,
    Container,
    Button,
    NavDropdown}from 'react-bootstrap';
import './Layout.css';


function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        sessionStorage.removeItem('userSession'); // Adjust this key according to your session storage key
        setIsLoggedIn(false);
        window.location="/";
        // Redirect to home page or any other page after logout
    };

    // Effect to check login status on component mount and update
    useEffect(() => {
        const userSession = sessionStorage.getItem('userSession'); // Adjust this key according to your session storage key
        if (userSession) {
            setIsLoggedIn(true);
        }
    }, []);
    return(
        <>
        <Navbar collapseOnSelect bg="light" expand="lg" sticky="top" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand as={Link} to="/">Vivid Vibes</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto">
                  {/*<Nav.Link href="#">Home</Nav.Link>*/}
                   <Nav.Link as={Link} to="/" activeClassName="active">Home</Nav.Link>
                    <NavDropdown title="Events" id="basic-nav-dropdown" style={{ color: '#F2EDD0' }}>
                    <div className="scrollable-dropdown">
                      <div className="row">
                        <ul>
                            <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}} href="/Marriages">Marriages</NavDropdown.Item></li>
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="/BParty">Festivals</NavDropdown.Item></li>
                          </ul>
                      </div>
                      <div className="row">
                        <ul>
                            <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}} href="/Parties">Parties</NavDropdown.Item></li>
                           
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="/BParty">Indian Festivals</NavDropdown.Item></li>
                          
                        </ul>
                       
                      </div> 
                </div>    
                    </NavDropdown>
                    <Nav.Link as={Link} to="/OurTeam" activeClassName="active">Our Team</Nav.Link>
                    {isLoggedIn ? (
                    <>
                      <Nav.Link as={Link} to="/UsersForm" activeClassName="active">Profile</Nav.Link>
                      <Button variant="outline-success" onClick={handleLogout}>Logout</Button>
                    </>
                  ) : (
                    <>
                      <Nav.Link as={Link} to="/ContactUs" activeClassName="active">Contact Us</Nav.Link>
                    <Button variant="outline-success" href="/Login">Log In</Button>
                      <Button variant="outline-success" href="/SignUpForm">Sign Up</Button>
                    </>
                  )}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </>
    
    )
}

export default Layout;