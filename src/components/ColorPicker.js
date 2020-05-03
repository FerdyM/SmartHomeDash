import React, {Component,} from 'react'
import Button from '@material-ui/core/Button'
import { ChromePicker } from 'react-color'

class ColorPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '#fff',
            showColorPicker: false,
        }
    }

    HandleColorChange(updatedColor) {
        console.log(updatedColor);
        this.props.HandleLampColorChange(updatedColor)
        this.setState({color: updatedColor});
    }
  
    render() {

        return (
          <div>
            <Button className="button" variant="contained" color="primary" onClick={() => this.setState({showColorPicker: !this.state.showColorPicker})}>
              {this.state.showColorPicker ? 'Close Color Picker' : 'Pick A Color'}
            </Button>
            {this.state.showColorPicker ? (
              <ChromePicker color={this.state.color} onChange={updatedColor => this.HandleColorChange(updatedColor.hex)}/>
            ) : (<></>)}
          </div>
        )
    }
  
    
}

export default ColorPicker;