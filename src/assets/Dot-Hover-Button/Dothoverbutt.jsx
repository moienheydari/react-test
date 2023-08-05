import React from 'react';
import './style.css';

export default function Dothoverbutt() {
    let myArr = [];
    for (let i = 0; i < 100; i++) {
        myArr.push(<a className='card__grid-effect-tile' href='#'></a>);
    }

    return (
        <div className='body'>
            <div className="card">
                <div className="card__img">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" />
                    <div className="card__grid-effect">
                        {myArr}
                    </div>
                </div>
            </div>
        </div>
    )
}