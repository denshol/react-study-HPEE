import React from 'react';
import { useState } from 'react';

const UserPW = (props) => {

    

    

    function userPW(e){
        console.log(e.target.value);
        props.setPw(e.target.value);
    }

    return (
        <div>
            <h1>PW : <input type="password" onChange={userPW}/></h1>
    <br/>
        </div>
    );

        


};

export default UserPW;