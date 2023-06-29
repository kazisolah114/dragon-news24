import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from '../../Shared/LeftSide/LeftSide';
import RightSide from '../../Shared/RightSide/RightSide';
import { Outlet } from 'react-router-dom';
import Navigations from '../../Shared/Navbar/Navigations';



const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Navigations></Navigations>
            <Container>
            <Row>
                <Col lg={3}>
                    <LeftSide></LeftSide>
                </Col>
                <Col lg={6}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                    <RightSide></RightSide>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default Main;