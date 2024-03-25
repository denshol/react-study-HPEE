import React, { useRef, useState } from 'react';

const InputValue = () => {
    const [name,setName] = useState('soo');
    const [age,setAge] = useState(20);

    const nameRef = useRef();
    const ageRef = useRef();


    const style={
        margin: '30px',
    }

    function changeHandler(){
        setName(nameRef.current.value)
        setAge(ageRef.current.value);
    }

    return (
        <div style={style}>
            <h1>input 태그 value값 지정 </h1>
            이름 : <input type="text" value={name} ref={nameRef} onChange={e=>changeHandler()}/>
            나이 : <input type="text" value={age}  ref={ageRef} onChange={e=>changeHandler()}/>

        </div>
    );
};

export default InputValue;