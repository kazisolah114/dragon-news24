import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightSide from '../../Shared/RightSide/RightSide';

const NewsDetails = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                            <RightSide></RightSide>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default NewsDetails;