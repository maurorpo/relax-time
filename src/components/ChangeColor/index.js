import React , { useState } from 'react';
import Change from './styledChange';
import { ChromePicker } from 'react-color';

// Styles
import "react-color-palette/lib/css/styles.css";

// Buttons
import Button from '../BtnNav/styledBtns'


const ChangeColor = ({ changeColors1, changeColors2, firstColor, secondColor }) => {

  const [pickColor1, setPickColor1] = useState(false);
  const [pickColor2, setPickColor2] = useState(false);

  const showPalete1 = () => {
    if (pickColor1) {
      setPickColor1(false)

      
    } else {
      setPickColor1(true)
      if (pickColor2) {
        setPickColor2(false)
      }
    }
  }

  const showPalete2 = () => {
    if (pickColor2) {
      setPickColor2(false)
    
    } else {
      setPickColor2(true)
      if (pickColor1) {
        setPickColor1(false)
      }
    }
  }

  return(
    <Change>
      <div>
        <Button onClick={showPalete1} >Color 1</Button>
        <Button onClick={showPalete2}>Color 2</Button>
      </div>
      {pickColor1 ? <ChromePicker color={firstColor} onChange={ (value) => changeColors1(value.hex) } /> : null}
      {pickColor2 ? <ChromePicker color={secondColor} onChange={ (value) => changeColors2(value.hex) } /> : null}
     
    </Change>
  )
}

export default ChangeColor;