import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components'







function PhotoText(props) {
    const { objWithPic, date } = props



// Star wars crawler credit: https://css-tricks.com/snippets/css/star-wars-crawl-text/

    return(
        <>
            <div className="fade"></div>

            <section class="photoText">
            
            <div class="crawl">
            
                <div class="title">
                    <p>NASA's Photo of the Day</p>
                    <p>{date}</p>
                    <h1>{objWithPic.title}</h1>
                </div>
                
                <p>{objWithPic.explanation}</p>      

            
            </div>
            
            </section>
        
        </>
    )
}


export default PhotoText;