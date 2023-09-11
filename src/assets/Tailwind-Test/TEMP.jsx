import React from 'react';
import './style.css';

export default function TailwindTest() {
    return (
        <div className='grid justify-items-center'>
            <p className="text-2xl font-bold underline text-yellow-400">Hello</p>
            <p className="text-4xl font-bold underline text-blue-400">World!</p>
        </div>
    )
}