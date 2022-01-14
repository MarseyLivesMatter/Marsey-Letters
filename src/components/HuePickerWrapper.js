import React, { Component } from "react";
import { HuePicker } from "react-color";
import "./HuePickerWrapper.css";

const baseHue = 295;
class HuePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseColor: {
        hsl: {
          a: 1,
          h: baseHue,
          l: 0.5,
          s: 1
        }
      }
    };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }
  
  handleChangeComplete(color) {
    const {onColorChange} = this.props;
    this.setState({
      baseColor: color
    }, () => {
      onColorChange(this.state.baseColor.hsl.h - 295);
    });
  }

  render() {
    return (
      <div className="huePickerWrapper">
        <HuePicker color={this.state.baseColor.hsl} onChangeComplete={this.handleChangeComplete} />
      </div>
    );
  }
}

export default HuePickerWrapper;
