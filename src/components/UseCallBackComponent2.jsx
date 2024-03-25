import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseCallBackComponent2 = () => {
    const [count,setCount] = useState(0);

    const clickHandler = useCallback(() => {
        console.log("count: ",count);
    },[count]);

    useEffect(()=>{
        console.log('렌터링 완료')
    },[clickHandler])

    return (
        <div >
            <input type="number" value={count} onChange={((e)=>setCount(e.target.value))} />
            <button onClick={clickHandler}>숫자 출력</button>

        </div>
    );
};

export default UseCallBackComponent2;