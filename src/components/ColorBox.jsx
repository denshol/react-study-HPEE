import React, { useContext } from 'react';
import { Color, ColorContext } from './Color';


const ColorBox = () => {
    const data = useContext(Color);
    console.log(data);


    return (
        <div style={{ width:1000,
                        height:1000,
                        backgroundColor:data}}>
            
        </div>
    );
};

export default ColorBox;