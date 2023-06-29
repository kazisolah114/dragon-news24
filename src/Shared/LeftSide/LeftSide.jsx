import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftSide = () => {
    const [categories, setCategories] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error.message))
    }, [])
    return (
        <div className='position-sticky top-0'>
            <h5 className='pb-3'>All Category</h5>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                        <Link className='text-decoration-none text-secondary' to={`category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            <div className='pt-5'>
                <h5>Editors Insight</h5>
                <Row xs={1} md={2} lg={1} className="">
                        <Col className='pb-2'>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className='pb-2'>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
            </div>
        </div>
    );
};

export default LeftSide;