import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/logo3.png'

function MyNav() {
    return (
        <Navbar className="bg-body-tertiary p-0">
            <Container fluid className="navbarContainer">
                <Navbar.Brand href="#home">
                    <img
                        alt="cafe tenda logo"
                        src={logo}
                        width="60"
                        height="45"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <div className="d-flex">
                    <div className="cartContainer">
                        <FaShoppingCart size={24} color="#fff" />

                    </div>
                    <span className="itemCountContainer">
                        <span className="itemCount">0</span>
                    </span>
                </div>

            </Container>
        </Navbar>
    )
}

export default MyNav