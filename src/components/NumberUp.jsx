import React from 'react';
import { useState } from 'react';

const NumberUp = (props) => {

    const [zero,setValue] = useState(0)
    function numberUp(){
        setValue(prev => prev+1);
    }

    function numberZero(){
        setValue(0);
    }

    
    return (
        <div>
            <h1>{zero}</h1>
            <button id="btn" onMouseOut={numberZero} onClick={numberUp}>클릭</button>
        </div>
    );
};

export default NumberUp;