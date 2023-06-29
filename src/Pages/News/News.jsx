import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const News = () => {
    const news = useLoaderData();
    const { _id, category_id, title, image_url, details, rating, total_view, author } = news;
    return (
        <div>
            <h5>Dragon News</h5>
            <Card>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>
                        <h2>{title}</h2>
                        <p>{details}</p>
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger" className='rounded-0'><FaArrowLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <div className='pt-5'>
                <h5>Editors Insight</h5>
                <Row xs={1} md={2} lg={3} className="g-4 p">
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
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
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
                            <Card.Img variant="top" src={third} />
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

export default News;