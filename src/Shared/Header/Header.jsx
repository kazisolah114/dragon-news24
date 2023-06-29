import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";

const Header = () => {
//    const {user} = useContext(AuthContext)
//    console.log(user)
    return (
        <div>
            <div className='text-center'>
                <img className='' src={logo} alt="" />
                <p className='text-secondary'><span>Journalism Without Fear or Favour</span></p>
                <p>{moment().format('dddd, MMMM Do YYYY')}</p>
            </div>
            <div className='d-flex align-items-center bg-light p-2'>
                <Button variant="danger" className='rounded-0 me-2 px-4'>Latest</Button>
                <Marquee speed={100} pauseOnHover={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequatur eligendi repellat. Inventore fugit reprehenderit amet minus id est nam!
                </Marquee>
            </div>

            {/* <Navbar className='pb-5 pt-4' expand="lg">
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
                            <Link to="/login"><Button variant="secondary" className='rounded-0 font-weight-bold'>Logout</Button></Link>
                            :
                            <Link to="/logout"><Button variant="secondary" className='rounded-0 font-weight-bold'>Login</Button></Link>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </div>
    );
};

export default Header;