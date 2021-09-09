import React from 'react';
import styled, { keyframes } from 'styled-components';

const bgAnimation = keyframes`
    0%{
      background-position:0% 200%
    }
    50%{
      background-position: 100% 0%
    }
    100%{
      background-position:0% 200%
    }
`;

const FullScream = styled.section`
  background: linear-gradient(90deg, ${props => props.firstColor} 10%, ${props => props.secondColor} ) 74%;
  position: absolute;
  background-size: 400% 400%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: background 1s ease-out;
  animation: ${bgAnimation} 5s cubic-bezier(0.4, 0, 1, 1) infinite;
`;

const Background = ({firstColor, secondColor}) => {



  return(
    <FullScream firstColor={firstColor} secondColor={secondColor} >
      
    </FullScream>
  );
}

export default Background;