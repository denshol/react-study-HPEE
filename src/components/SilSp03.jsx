import React, { useState } from 'react';
import SilSp03css from './SilSp03css.css';

const SilSp03 = (props) => {
    
    const [num,setNum] = useState(0);


function up(){
    setNum((prev)=>prev+1);
    props.total();
}

    return (
        <div id="back">
            <h1>{num}</h1>
            <div id="front" style={{
                cursor : 'pointer',

            }} onClick={up}>클릭</div>
        </div>
    );
};

export default SilSp03;