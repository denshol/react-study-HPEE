import React, { useState } from 'react';

const SilSp02 = (props) => {
    const {list} = props

    const [value,setValue] =useState();


    function updateValue(e){
        setValue(e.target.value)
    }


    function output(){
        alert(value);
    }

    return (
        <div>
            <h1>라디오 버튼의 value를 출력</h1>
            {list.map(item=>(
                <label key={item.name}>

                <input name="region" type="radio" value={item.value} onChange={e=>updateValue(e)}/>{item.name}
                </label>
                ))}
            <input type="button" value="확인" onClick={output} />
        </div>
    );
};

export default SilSp02;