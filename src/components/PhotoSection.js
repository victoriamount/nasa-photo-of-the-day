import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components'
import PhotoText from './PhotoText';

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledButton = styled.button`
  padding: 1% 2%;
  width: 30%;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-weight: bolder;
  border-color: ${props => props.theme.white};
  border-radius: 10px;
  z-index: 2;
  position: fixed;
  top: 90%;
  left: 35%;

  
  &:hover {
      color: ${props => props.theme.primaryColor};
      transition: all 0.2s ease-in-out;
  }
`

const StyledPhotoInfo = styled.div`
    background: url(${props => props.objWithPic.url}) center repeat-y;
    display:inline-block;

`


function PhotoSection(props) {
    const { objWithPic, runRandomDate, date } = props;



    return(

        <div className='photoSection'>
            {/* {objWithPic && <img src={objWithPic.url} alt='NASAs Daily Photo' />} */}
            <StyledButton onClick={()=>runRandomDate()}>{`Showing ${date} 🚀 Click to Refresh`}</StyledButton> 

            {/* <div className='photoInfo' style={{background:`url(${objWithPic.url}) center repeat-y`, display:'inline-block' }}> */}
            <StyledPhotoInfo objWithPic={objWithPic} >
            <PhotoText objWithPic={objWithPic} date={date} />
            </StyledPhotoInfo>
            {/* </div> */}

        </div>

    );
};

export default PhotoSection;