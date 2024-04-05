import React from 'react';
import './style.css';
import myImage1 from './PictureOne.png';
import myImage2 from './PictureTwo.png';
import myImage3 from './PictureThree.png';
import myImage4 from './PictureFour.png';

export default function ImageGallery() {
    return (
        <div className='gallerycontainer'>
            <div className='box box-1' style={{ '--img': `url(${myImage1})` }} data-text="hello"></div>
            <div className='box box-2' style={{ '--img': `url(${myImage2})` }} data-text="hello"></div>
            <div className='box box-3' style={{ '--img': `url(${myImage3})` }} data-text="hello"></div>
            <div className='box box-4' style={{ '--img': `url(${myImage4})` }} data-text="hello"></div>
        </div>
    )
}