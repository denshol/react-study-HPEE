import React from 'react';
import { useState } from 'react';

const ColorChange = () => {


    const [color,setValue] = useState('black');

    function changingRed(){
        setValue('red');
    }
    function changingBlue(){
        setValue('blue');
    }
    function changingGreen(){
        setValue('green');
    }


    return (
        <div>
            <h1 style={{
                color : color
            }}>글자색 바꾸기</h1>
            <button onClick={changingRed}>빨간색</button>
            <button onClick={changingGreen}>초록색</button>
            <button onClick={changingBlue}>파란색</button>
        </div>
    );
};


export default ColorChange;