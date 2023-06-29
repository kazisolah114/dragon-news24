import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigations from '../Navbar/Navigations';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <div>
                <Navigations></Navigations>
            </div>
            <Form className='w-50 mx-auto border p-4 rounded-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2'>
                    Submit
                </Button>
                <Form.Text className="text-muted">
                    <p>New to the website? <Link to="/register">Register here</Link></p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;