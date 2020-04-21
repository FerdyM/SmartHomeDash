import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider'
import { ChromePicker } from 'react-color'
// import { SketchPicker } from 'react-color'
import './Main.css';

const Main = () => {
    return (
        <div className="main">
            <LightSwitches/>
        </div>
    );
}
function ColorPicker () {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? 'Close Color Picker' : 'Pick A Color'}
      </button>
      {showColorPicker && (
        <ChromePicker color={color} onChange={updatedColor => HandleColorChange(updatedColor.hex)}/>
      )}
    </div>
  )

  function HandleColorChange(updatedColor) {
    console.log(updatedColor);
    HandleLampColorChange(updatedColor);
    setColor(updatedColor);
  }
}


const LightSwitches = () => {
    return (
        <div className="lights">
            <h2>Lights</h2>
            <FormControlLabel 
                className="rgbSaltLampLightSwitch"
                control= {
                    <Switch 
                        color="primary" 
                    />
                }    
                label="RGB Salt Lamp"
            />
            <ContinuousSlider />
            <ColorPicker />
        </div> 
    )
}

const HandleLampColorChange = (color) => {
    fetch('http://localhost:8080/lights/saltlamp/color', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({color: color})
  });
  console.log('request sent')
}
const HelloWorld = (value) => {
    fetch('http://localhost:8080/lights/saltlamp/brightness', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({goonk: value.toString()})
  });
  console.log('request sent')
}
function ContinuousSlider() {
    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    //   console.log(event)
      console.log(newValue)
      HelloWorld(newValue)
    };

    return (
        <Slider value={value} onChange={handleChange} max={255} min={1} aria-labelledby="continuous-slider" />
    )
}



export default Main;