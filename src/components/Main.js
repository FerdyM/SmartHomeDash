import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Switch, Card } from '@material-ui/core';
import RGBLight from './RGBLight'
import './stylesheets/Main.css'

const Main = () => {
    return (
        <div className="main">
            <RGBLight lightName="saltlamp"/>
            <SaltLamp />
            <RGBLight lightName="RGBsaltlamp"/>
        </div>
    );
}


const SaltLamp = () => {
  return (
      <Card className="card saltlamp">
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
      </Card>

  )
}



export default Main;