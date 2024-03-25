import React from 'react';
import scss from "./NestingComponent1.scss"

const NestingComponent = () => {
    return (
        <div className='container'>
            <ul>
                <li>빨강</li>
                <li>파랑</li>
                <li>초록</li>
            </ul>
        </div>
    );
};

export default NestingComponent;