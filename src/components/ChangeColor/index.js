import styled from 'styled-components';
import React from 'react';
import { ColorPicker, useColor  } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Change = styled.section`
  position: absolute;
`;

const ChangeColor = ({ changeColors1, changeColors2 }) => {
  const [color, setColor] = useColor("hex", "#121212");

  changeColors1(color)

  const prueba = (val) => {
    console.log(val)
  }

  return(
    <Change>
      {/* <ColorPicker width={256} height={156} color={color} onChange={() => prueba(setColor)} hideHSV dark /> */}
      <form>
        <input type='text' id="color1" maxLength="6" onChange={(e) => changeColors1(e.target.value)} ></input>
        <input type='text' id="color2" maxLength="6" onChange={(e) => changeColors2(e.target.value)}></input>
      </form>
    </Change>
  )
}

export default ChangeColor;