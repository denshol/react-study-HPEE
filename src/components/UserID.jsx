import React from 'react';

const UserID = (props) => {

    

    function userId(e){
        
        props.setId(e.target.value)
    }

    return (
        <div>
            <h1>ID : <input type='text' onChange={userId}/></h1>
    <br/>
        </div>
    );
};



export default UserID;