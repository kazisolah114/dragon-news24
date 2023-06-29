import React from 'react';
import Navigations from '../Shared/Navbar/Navigations';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <Container>
            <div>
                <Navigations></Navigations>
            </div>
            <div>
                <Form className='w-50 mx-auto border p-4 rounded-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirm" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mb-2'>
                        Register
                    </Button>
                    <Form.Text className="text-muted">
                        <p>Allreedy have an account? <Link to="/login">Login here</Link></p>
                    </Form.Text>
                </Form>
            </div>
        </Container>

    );
};

export default Register;