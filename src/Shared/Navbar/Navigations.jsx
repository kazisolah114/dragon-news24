import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUser } from "react-icons/fa";
import './Navigations.css'

const Navigations = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar className='pb-5 pt-4' expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto header-nav">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#career">Career</Nav.Link>
                    </Nav>
                    <Nav className='d-flex gap-3 align-items-center'>
                        <p className='mb-0'>{user ? <span><FaUser/></span> : <span></span>}</p>
                        {user ?
                            <Link to="/logout"><Button variant="secondary" className='rounded-0 font-weight-bold'>Logout</Button></Link>
                            :
                            <Link to="/login"><Button variant="secondary" className='rounded-0 font-weight-bold'>Login</Button></Link>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigations;