import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';
import './Main.css';

const fakeAPIcall = () => {
    console.log('this will trigger a lamp by calling the express backend');
}

const Card = () => {
    

    return (
        <div className="main">
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
            </div>   
            <div className="navigation">
                <h2>Smart Home Hub</h2>
                <Link 
                    href="10.0.0.230:5000"
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
        </div>
    );
}

export default Card;