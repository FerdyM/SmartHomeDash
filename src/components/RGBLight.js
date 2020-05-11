import React, {Component, useState} from 'react'
import ColorPicker from './ColorPicker'
import { Card, Slider, Switch, FormControlLabel} from '@material-ui/core';
import axios from 'axios'

let api = axios.create({
  baseURL: process.env.SERVER,
  headers: {
    'Content-Type': 'application/json'
   },
})

class RGBLight extends Component {
    constructor(props) {
      super(props)
    }

    HandleLampColorChange(color) {
      api.post("/lights/" + this.props.lightName + "/color", JSON.stringify({color: color}))
        .then(res => {
          console.log(`${this.props.lightName} color changed to: ${color}`)
        })
        .catch(err => {
          console.log(`Error changing color for ${this.props.lightName}`)
          console.log(`ERROR: ${err}`)
        })
    }

    HandleBrightnessChange(value) {
      api.post("/lights/" + this.props.lightName + "/brightness" , JSON.stringify({goonk: value.toString()}))
        .then(res => {
          console.log(`${this.props.lightName} brightness changed to: ${value}`)
        })
        .catch(err => {
          console.log(`Error changing brightness for ${this.props.lightName}`)
          console.log(`ERROR: ${err}`)
      })
    }

    render() {
        return (
          <Card className="card">
            <h2>{this.props.lightName}</h2>
            <FormControlLabel 
                control= {
                    <Switch 
                        color="primary" 
                        
                    />
                }    
                label="On / Off"
            />
            <ContinuousSlider HandleBrightnessChange={this.HandleBrightnessChange}/>
            <ColorPicker HandleLampColorChange={this.HandleLampColorChange}/>
          </Card>
                
                
        )
    }
}



const ContinuousSlider = () => {
    const [value, setValue] = useState(255);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
      this.HandleBrightnessChange(newValue)
    };

    return (
        <Slider className="slider" value={value} onChange={handleChange} max={255} min={1}  />
    )
}



export default RGBLight;