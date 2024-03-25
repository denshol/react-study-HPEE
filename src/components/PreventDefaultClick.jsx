import React from 'react';

const PreventDefaultClick = () => {

    function linkClick(e){
        e.preventDefault();
        console.log('link is cliked!!!!');
    }


    return (
        <div>
            <a href="https://www.naver.com" onClick={linkClick}>
                클릭하세요
            </a>
        </div>
    );
};

export default PreventDefaultClick;

function linkClick(e){
    e.preventDefault();
    console.log('link is cliked!!!!');
}

<a href="https://www.naver.com" onClick={linkClick}>
    클릭하세요
</a>