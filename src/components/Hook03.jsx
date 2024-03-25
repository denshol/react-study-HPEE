import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Hook03 = () => {
    const [count,setCount] = useState(0);
    const [renderCount,setRenderCount] = useState(0);

    useEffect(()=>{
        setRenderCount(renderCount+1);
        console.log('렌더링 완료');
    },[count]);



    return (
        <div>
            <h1>Count : {count}</h1>  
            <br/>   
            <h1>렌더링 횟수 : {renderCount-1}</h1>
            <button onClick={()=>setCount(count+1)}>클릭</button>
        </div>
    );
};

export default Hook03;