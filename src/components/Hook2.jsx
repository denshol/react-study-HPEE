import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Hook2 = () => {

useEffect(()=>{

    console.log('렌더링이 완ㄹ되었습니다.')
},[])
   let [n,setN]= useState(0);
    let [c,setC] = useState('안녕하세요');




    function A(){
        setN(n+1);
        console.log('count 값이 변경되었습니다.')
    }




    function C(param){
        setC(param)
        console.log('text 값이 변경되었습니다.')
    }
    


    return (
        <div style={{display:'flex',flexDirection:'column'}}>
           <h1>{n}</h1> 
           <br/>
           <button onClick={A}>+ 1</button>
           <br />
           <hr/>
           <hr />
           <br />
           <input type="text" onChange={(e)=>C(e.target.value)} value={c} name="" id=""/>
           <h1>{c}</h1>
        </div>
    );
};

export default Hook2;