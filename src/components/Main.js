import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import { ChromePicker } from 'react-color'
import './Main.css';

const Main = () => {
    return (
        <div className="main">
            <RGBSaltLamp/>
            <SaltLamp />
        </div>
    );
}
function ColorPicker () {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? 'Close Color Picker' : 'Pick A Color'}
      </Button>
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
const SaltLamp = () => {
  return (
    <div className="light">
            <h2>Salt Lamp</h2>
            <FormControlLabel 
                className="rgbSaltLampLightSwitch"
                control= {
                    <Switch 
                        color="primary" 
                        
                    />
                }    
                label="On / Off"
            />
        </div> 
  )
}

const RGBSaltLamp = () => {
    return (
        <div className="light2">
            <h2>RGB Salt Lamp</h2>
            <ContinuousSlider />
            <ColorPicker />
            <FormControlLabel 
                // className="rgbSaltLampLightSwitch"
                control= {
                    <Switch 
                        color="primary" 
                        
                    />
                }    
                label="On / Off"
            />
            
            
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