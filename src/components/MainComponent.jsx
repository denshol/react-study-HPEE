import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const MainComponent = () => {
    const {darkMode} =useContext(ThemeContext);

    const theme={
        backgroundColor : darkMode ? "black":"white",
        color:darkMode? "white":"black",
    }


    return (
        <div className='main' style={theme}>
            메인
        </div>
    );
};

export default MainComponent;