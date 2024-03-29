import React, { useReducer } from 'react';
import countReducer from './counterReducer';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Counter2 = () => {
    const [state,dispatch] = useReducer(countReducer,0);



    return (
        <div style={{display:'flex',}}>
      
        <p>현재 카운터 값은 <b>{state}</b>입니다.</p>        
        <Button variant="primary" onClick={()=>{dispatch({type:"INCREMENT"})}}>+1</Button>
        <Button variant='danger' onClick={()=>{dispatch({type:"DECREMENT"})}}>-1</Button>
        </div>
    );
};

export default Counter2;