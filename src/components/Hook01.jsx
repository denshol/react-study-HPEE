import React from 'react';
import { useState } from 'react';

const Hook01 = () => {
    const [a,setA] =useState(['초콜렛','사탕']);


    let inp = document.getElementById('inp');
    function A(){
        setA([value,...a]);
        
    }
let value;
    function B(param){
        value=param;
        
        
    }

    return (
        <div>
            <input type='text' id="inp" onChange={(e)=>{B(e.target.value)}}/>
            <button onClick={A}>추가</button>

            <ul>
                {a.map((v,i)=>(
                    <li key={i}>{v}</li>
                ))}
                
            </ul>
        </div>
    );
};

export default Hook01;