import React, { useContext } from 'react';
import { ConContext01 } from './ConContext';


const Context01 = () => {
    const {modeColor} = useContext(ConContext01);
    console.log(modeColor);
   const userColor = prompt("색상값을 입력하세요");



    return (
        <div style={{backgroundColor:userColor}}>
            
        </div>
    );
};

export default Context01;