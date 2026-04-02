import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container
            fluid
            className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
        >
            <h1 className="display-1">Hello World!</h1>
            <p className="lead">Your journey starts here. Goodluck!</p>
        </Container>
    )
}

export default Home
