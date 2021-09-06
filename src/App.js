import React , {useState } from 'react';
import Background from './components/Background';
import ChangeColor from './components/ChangeColor';

function App() {
  

  const [firstColor, setFirstColor] = useState('#5b45ee')
  const [secondColor, setsecondColor] = useState('#8c2bac')

  const changeColors1 =(value) => {
    if (value.length === 7) {
      console.log(value)
      setFirstColor(value)
    }
  }

  const changeColors2 =(value) => {
    console.log(value)
    if (value.length === 7) {
      setsecondColor(value)
    }
  }


  return (
    <div className="App">
      <Background firstColor={firstColor} secondColor={secondColor}  />
      <ChangeColor firstColor={firstColor} secondColor={secondColor} changeColors1={changeColors1} changeColors2={changeColors2} />
    </div>
  );
}

export default App;
