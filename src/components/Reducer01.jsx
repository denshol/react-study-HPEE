import React, { useReducer } from 'react';
import reducerReducer from './redecerReducer';
import './Reducer01.scss';
const Reducer01 = () => {
    const [state,dispatcher] = useReducer(reducerReducer,0);


    return (
        <div style={{
            margin:'auto',
            textAlign:'center',
            display:'flex',
            flexDirection:"column"
            
        }}>
            <h1>🎉🌹 새싹 햄버거 가게 🎉🌹</h1>
            <br/>
            <h1>지불할 금액 : {state}원</h1>
            <br/>
            <div class="parent">
                <div class="box" onClick={()=>dispatcher({type:"햄버거"})}>🍔</div>
                <div class="box" onClick={()=>dispatcher({type:"감자튀김"})}>🍟</div>
                <div class="box" onClick={()=>dispatcher({type:"콜라"})}>🥤</div>
            </div>


        </div>
    );
};

export default Reducer01;