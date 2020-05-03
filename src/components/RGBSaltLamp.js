import React, {Component, useState} from 'react'
import ColorPicker from './ColorPicker'
import { Card, Slider, Switch, FormControlLabel} from '@material-ui/core';

export class RGBSaltLamp extends Component {
    constructor(props) {
        super(props)
    }

    HandleLampColorChange(color) {
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

    HandleBrightnessChange(value) {
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

    

    render() {
        return (
          <Card className="card">
            <h2>RGB Salt Lamp</h2>
            <FormControlLabel 
                // className="rgbSaltLampLightSwitch"
                control= {
                    <Switch 
                        color="primary" 
                        
                    />
                }    
                label="On / Off"
            />
            <ContinuousSlider />
            <ColorPicker HandleLampColorChange={this.HandleLampColorChange}/>
          </Card>
                
                
        )
    }
}



const ContinuousSlider = () => {
    const [value, setValue] = useState(255);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    //   console.log(event)
      console.log(newValue)
      RGBSaltLamp.HandleBrightnessChange(newValue)
    };

    return (
        <Slider className="slider" value={value} onChange={handleChange} max={255} min={1}  />
    )
}



export default RGBSaltLamp;