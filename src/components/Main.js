import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';
// import { SketchPicker } from 'react-color'
import './Main.css';

const fakeAPIcall = () => {
    fetch('http://localhost:8080/lights/lavalamp1', requestOptions)
    console.log('this will trigger a lamp by calling the express backend');
}

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ switch: 'off' })
};


const Main = () => {
    

    return (
        <div className="main">
            <LightSwitches />
            <NavigationPane /> 
        </div>
    );
}
const LightSwitches = () => {
    return (
        <div className="lights">
            <h2>Lights</h2>
            <FormControlLabel 
                className="saltLampLightSwitch"
                control= {
                    <Switch 
                        color="primary" 
                        onChange={fakeAPIcall()}
                    />
                }    
                label="Salt Lamp"
            />
            <FormControlLabel 
                className="rgbSaltLampLightSwitch"
                control= {
                    <Switch 
                        color="primary" 
                        onChange={fakeAPIcall()}
                    />
                }    
                label="RGB Salt Lamp"
            />
            <FormControlLabel 
                className="lavaLamp"
                control= {
                    <Switch 
                        color="primary" 
                        onChange={fakeAPIcall()}
                    />
                }    
                label="Lava Lamp"
            />
            {/* <SketchPicker /> */}
        </div> 
    )
}


const NavigationPane = () => {
    return (
        <div className="navigation">
            <h2>Smart Home Hub</h2>
            <Link 
                href="127.0.0.1:5000"
                target="_blank"
                className="dash-link"
            >
                OctoPrint
            </Link>  
            <Link 
                href="10.0.0.230:1880/ui"
                className="dash-link"
            >
                Node-red Dashboard
            </Link> 
            <Link 
                href="10.0.0.230:5000/admin"
                className="dash-link"
            >
                Pi-hole Dashboard
            </Link> 
        </div>
    )
}

export default Main;