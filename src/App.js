import React, { useState } from 'react';

import CssSilSp01 from './components/dist/CssSilSp01';

import AddName from './components/AddName';
import UseRefComponent from './components/UseRefComponent';
import UserConponent2 from './components/UserConponent2';
import UseRefComponent3 from './UseRefComponent3';
import UserRefDom from './UserRefDom';
import InputValue from './InputValue';
import { useCallback } from 'react';
import UserCallBackComponent1 from './components/UserCallBackComponent1';
import UseCallBackComponent2 from './components/UseCallBackComponent2';
import ChildComponent from './components/ChildComponent';
import Hook01 from './components/Hook01';
import Hook2 from './components/Hook2';
import Hook03 from './components/Hook03';
import Hook04 from './components/Hook04';

const App = () => {

const [count,setCount] = useState(0);

const updateHandler= useCallback(()=>{
  console.log("update");
},[]);


  
	return (
    <>
    {/* <Div>

  <Button>버튼1</Button>
  <Button primary>버튼2</Button>
    </Div> */}
    {/* <input type='number' onChange={(e)=>setCount(e.target.value)}/>
  <ChildComponent update={updateHandler}/> */}
  <Hook04/>
  
   
  </>
  );
};

export default App;