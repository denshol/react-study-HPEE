import React from 'react';
import { useState } from 'react';

const HelloComponent = () => {

    const [hello,setValue] = useState('안녕하세요');


    function login(){
        setValue('로그인 되었습니다.');
    }
    function logout(){
        setValue('로그아웃되었습니다.')
    }

    return (
        <div>
            <h1>{hello}</h1>
            <button onClick={login}>로그인</button>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default HelloComponent;