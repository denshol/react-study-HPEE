import React from 'react';
import { decrement, increment, incrementByAmount } from '../counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeName, 나이변경, 이름변경 } from '../user/userSlice';

const Counter = () => {

    const count = useSelector((state)=>state.counter.value);
    const user = useSelector(state=>state.user);
    
    const dispatch = useDispatch();


    return (
        <div>
            <h1>현재 카운터 값은 {count}입니다</h1>
            <h1>이름 : {user.name}</h1>
            <h1>나이 : {user.age}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(100))}>Amount</button>
            <button onClick={()=>dispatch(changeName('김준혁'))}>이름변경</button>
            <button onClick={()=>dispatch(changeAge(20))}>나이변경</button>
        </div>
    );
};

export default Counter;

    
