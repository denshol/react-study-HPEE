import React, { useState } from 'react';

const SelectImage = () => {
    const selectList = ['apple','mango','banana','strawberry'];
    const [select,setSelect] = useState("/images/banana.jpg");

    function updateValue(e){
        setSelect(e.target.value);
    }
    return (
        <div>
         <h1>선택한 과일 : {select}</h1>            
         <select value={select} onChange={updateValue}>
             {selectList.map(v=>(
                 <option value = {`/images/${v}.jpg`}>{v}</option>
             ))}
        </select>
        <img src={select} width="150px" height="150px" alt="안쓰면 에러납니다"/>
        </div>
    );
};

export default SelectImage;