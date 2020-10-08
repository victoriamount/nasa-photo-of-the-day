import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dummyData from '../dummyData';

function PhotoText(props) {
    const { objWithPic, date, photoTitle, photoText } = props
    // console.log(objWithPic)
    console.log('inside PhotoText')





    return(
        <div className='photoText'>
            <h2>{photoTitle}</h2>
            <p>{photoText}</p>
        </div>
    )
}

export default PhotoText;