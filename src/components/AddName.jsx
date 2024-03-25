import React, { useEffect, useState } from 'react';

const AddName = () => {
    const [names,setNames] = useState(()=>heavyWork());
    const [input,setInput] = useState('');


    function heavyWork(){
        for(let i=0;i<1000;i++){
            console.log('엄청나게복잡한계산식이라고침')
        }
        return ['김준혁','리액트'];
    }

    function inputChange(e){
        setInput(e.target.value);
    }
    function uploadInput(){
        setNames((prevState)=>[...prevState,input]);
    }

    useEffect(()=>{
        console.log('렌더링이 완료되었습니다.');
        console.log({names});

        return()=>{
            console.log("cleanup 뒷정리")
            console.log({names});
        }
    },[names])

    return (
        <div>
        <input type='text' onChange={inputChange}/>
        <button onClick={uploadInput}>추가</button>            
            <div>
                {names.map((name,idx) => (<p key={idx}>{name}</p>))}
            </div>
        </div>
    );
};

export default AddName;


