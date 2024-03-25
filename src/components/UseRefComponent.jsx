import React, { useRef } from 'react';

const UseRefComponent = () => {
    const ref = useRef("안녕하십니까");
    console.log("변경 전 ref  값 : ",ref.current);

    ref.current = "Hello";
    console.log("변경 후 ref 값 : ",ref.current);

    return (
        <div>
            
        </div>
    );
};

export default UseRefComponent;