import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Hook04 = () => {
    const text = useRef('안녕하세요');
    const [a,setA] = useState('안녕하세요');

function change(e){
    text.current=e.target.value;
    console.log(text.current);
}

function A(e){
    e.preventDefault();
    setA(text.current.value);
}

    return (

        <div style={{display:'flex',flexDirection:'column'}}>
            <form  onSubmit={A}  action="">

            <input type="text"  ref={text} onChange={change}/>
            <input type='submit' value="전송"/>            <br/>
            <h1>전송된 단어 : {text.current.value}</h1>
            </form>
        </div>
    );
};

export default Hook04;