import React, { createContext, useContext, useState } from 'react';


import './App.css';
import LifecycleEx from './LifecycleEx';
const App = () => {
  const userColor = prompt('색상값을 입력하세요');
 
  // const [darkMode,setDarkMode] = useState(false);
	return (
<>
 <h1>Start React 200!</h1>
 <p>css 적용하기</p>
 <LifecycleEx/>
</>
);
};
export default App;
