import React from 'react';
import { Switch, Card, FormControlLabel} from '@material-ui/core';
import Icon from '@material-ui/core/Icon'
import RGBLight from './RGBLight'
import './stylesheets/Main.css'

const Main = () => {
    return (
        <div className="main">
            <RGBLight lightName="saltlamp"/>
            <SaltLamp />
            <RGBLight lightName="RGBsaltlamp"/>
            <Icon className="add-icon" color="primary" style={{fontSize: 60}}>add_circle</Icon>
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