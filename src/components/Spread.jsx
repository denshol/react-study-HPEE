import React from 'react';

const Spread = () => {
    const person1 = {name: 'junhyeok'};

    const person2 = {...person1,age:20};

    const person3 = {...person2,region:'Bucheon'}

    const person4 = {region:'BuSAN',...person3}


    return (
        <div>
            <h1>{JSON.stringify({person1})}</h1>
            <h1>{JSON.stringify({person2})}</h1>
            <h1>{JSON.stringify({person3})}</h1>
            <h1>{JSON.stringify({person4})}</h1>
        </div>
    );
};




export default Spread;