import React, { useReducer, useState } from 'react';
import './Reducer02.scss';
import redecuerReducer02 from './reduceReducer02';


const Reducer02 = () => {
    const [state,dispatcher] = useReducer(redecuerReducer02,6000);
    const [money,setMoney] =useState(0);


    return (
        <div className='container'>
            <h1>👮‍♀️금액을 입력하세요.</h1>
            <br/>
            <input type='number' step={1000} onChange={(e)=>{setMoney(e.target.value)}}/>
            <br/>
            <h1>👮‍♀️입금 또는 출금 버튼을 클릭하세요.</h1>
            <br/>
            <div className='parent'>
                <div id="input" onClick={()=>dispatcher({type:"INPUT",money:money})}>입금</div>
                <div id="output" onClick={()=>dispatcher({type:"OUTPUT",money:money})}>출금</div>
            </div>
            <br/>
            <h1>📀💿현재 잔액 : {state}</h1>
        </div>
    );
};

export default Reducer02;