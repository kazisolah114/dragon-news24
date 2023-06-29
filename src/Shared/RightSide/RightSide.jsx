import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
import './RightSide.css'


const RightSide = () => {
    return (
        <div className='position-sticky top-0'>
            <div className='mb-4'>
                <h5 className=''>Login With</h5>
                <Button variant="outline-primary" className='rounded-1 p-1 w-100 mb-1 mt-3'><FaGoogle/> Login With Google</Button>
                <Button variant="outline-primary" className='rounded-1 p-1 w-100'><FaGithub/> Login With Github</Button>
            </div>
            <div className=''>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
            <div className='newspaper'>
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant='danger' className='rounded-0'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightSide;