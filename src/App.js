import React , {useState } from 'react';

// Components
import Background from './components/Background';
import ChangeColor from './components/ChangeColor';
import IframeSpotify from './components/IframeSpotify';
import Intro from './components/Intro'

// StyledComponents
import Nav from './components/Nav/styledNav'

// Fonts
import './assets/fonts/style.css'

// Basics
import './index.css'

function App() {
  

  const [firstColor, setFirstColor] = useState('#5b45ee')
  const [secondColor, setsecondColor] = useState('#8c2bac')

  const changeColors1 =(value) => {
    if (value.length === 7) {
      setFirstColor(value)
    }
  }

  const changeColors2 =(value) => {
    if (value.length === 7) {
      setsecondColor(value)
    }
  }

  return (
    <div className="App">
      <Background firstColor={firstColor} secondColor={secondColor}  />
      <Intro />
      <Nav>
        <ChangeColor firstColor={firstColor} secondColor={secondColor} changeColors1={changeColors1} changeColors2={changeColors2} />
        <IframeSpotify />
      </Nav>
    </div>
  );
}

export default App;
