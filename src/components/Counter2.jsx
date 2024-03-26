import React, { useReducer } from 'react';
import countReducer from './counterReducer';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Counter2 = () => {
    const [state,dispatch] = useReducer(countReducer,0);



    return (
        <div style={{display:'flex',}}>
            <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        <p>현재 카운터 값은 <b>{state}</b>입니다.</p>        
        <Button variant="primary" onClick={()=>{dispatch({type:"INCREMENT"})}}>+1</Button>
        <Button variant='danger' onClick={()=>{dispatch({type:"DECREMENT"})}}>-1</Button>
        </div>
    );
};

export default Counter2;