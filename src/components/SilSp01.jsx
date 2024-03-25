import React, { useState } from 'react';

const SilSp01 = () => {
    const [message,setMessage] = useState({title : '제목', color : 'black'})

   

    function asdf(e){

        setMessage({...message,title:e.target.value,color:'red'});
    }

    function output(){
        alert(message.title);
    }
    return (
        <div>
            <h1 style={{
                color : message.color
            }}>{message.title}</h1>  
            <hr/>      
            <input type="text" onChange={asdf} />
            <input type="button"  value="클릭" 
                onClick={output}
            />

        </div>
    );
};

export default SilSp01;