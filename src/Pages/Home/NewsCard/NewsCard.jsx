import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaRegEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, rating, total_view, author, } = news;
    return (
        <div>
            <Card className="mt-4">
                <Card.Header className=''>

                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <Card.Img style={{ height: '40px', width: '40px' }} className='rounded-5' variant="top" src={author.img} />
                            <div className='ms-3'>
                                <h6>{author.name}</h6>
                                <p className='mb-0'>{author.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark className='me-3'></FaRegBookmark>
                            <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='py-3' variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</>
                                :
                                <>{details.slice(0, 250)}...
                                    <Link to={`/newsdetails/${_id}`}
                                        className='text-warning text-decoration-none d-block'
                                    >
                                        Read More</Link>
                                </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>

                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaRegEye className='me-2'></FaRegEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;