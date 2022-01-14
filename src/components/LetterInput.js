import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";
import BgSelector from "./BgSelector";
import Letter from "./Letter";
import HuePickerWrapper from "./HuePickerWrapper";

const bgData = [
  {
    src: "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FBg1-min.png?v=1598670439354",
    thumbnail_src:
      "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2Fbg1_thumb.png?v=1598670888659",
    styles: {
      fontSize: "7vw",
      top: "3%",
      left: "26%",
      width: "70%",
      height: "68%",
      transform: "perspective(45vw) rotateY(20deg)",
    },
    defaultText: "dude\nbussy\nlmao",
  },
  {
    src: "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FBg2-min.png?v=1598670437827",
    thumbnail_src:
      "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2Fbg2_thumb.png?v=1598670889459",
    styles: {
      fontSize: "7vw",
      top: "5%",
      left: "17%",
      width: "70%",
      height: "68%",
      transform: "perspective(68vw) rotateY(19deg)",
    },
    defaultText:
      "dude\nbussy\nlmao",
  },
  {
    src: "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FBg3-min.png?v=1598673547364",
    thumbnail_src:
      "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2Fbg3_thumb.png?v=1598673539803",
    styles: {
      fontSize: "9vw",
      top: "1%",
      left: "37%",
      width: "55%",
      height: "85%",
      transform: "perspective(68vw) rotateY(19deg)",
    },
    defaultText: "dude\nbussy\nlmao",
  },
  {
    src: "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2Fbg4-min.png?v=1598673545286",
    thumbnail_src:
      "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2Fbg4_thumb.png?v=1598673540920",
    styles: {
      fontSize: "7.5vw",
      top: "19%",
      left: "32%",
      width: "55%",
      height: "55%",
      transform: "perspective(40vw) rotateY(15deg)",
    },
    defaultText: "dude\nbussy\nlmao",
  },
];

class LetterInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: bgData[0].defaultText,
      stringArray: bgData[0].defaultText.toLowerCase().split(""),
      bgSelected: 0,
      hueRotation: 0,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleChangeBg = this.handleChangeBg.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      value: event.target.value,
      stringArray: event.target.value.toLowerCase().split(""),
    });
  }

  handleChangeBg(bg) {
    this.setState({
      bgSelected: bg,
      value: bgData[bg].defaultText,
      stringArray: bgData[bg].defaultText.toLowerCase().split(""),
    });
  }

  handleChangeColor(rotationDeg) {
    this.setState({
      hueRotation: rotationDeg,
    });
  }

  render() {
    return (
      <div>
        <BgSelector bgData={bgData} onBgSelected={this.handleChangeBg} />
        <HuePickerWrapper onColorChange={this.handleChangeColor} />

        <div className="headerText">Type your truth:</div>
        <TextareaAutosize
          className="userInput"
          value={this.state.value}
          onChange={this.handleTextChange}
        ></TextareaAutosize>
        <div className="mainContainer">
          <div className="imageContainer">
            <img
              className="bgImage"
              src={bgData[this.state.bgSelected].src}
            ></img>
            <div
              className="letterContainer"
              style={bgData[this.state.bgSelected].styles}
            >
              {this.state.stringArray.map((letter) => (
                <Letter hueRotation={this.state.hueRotation} value={letter} />
              ))}
            </div>
            <div className="imageOverlayText">
              https://marsey-letters.glitch.me/
            </div>
          </div>
        </div>

        <div className="subText">take a screenshot to save I guess idk</div>

        <div className="footerText">
          Font by <a href="https://rdrama.net/@chapose">Chapose</a> <br/> Code ripped off by <a href="https://rdrama.net/@chiobu">chiobu</a>
          <p><sup>Original code by <a href="https://twitter.com/GuamHat">@Guamhat🌶</a> on{" "}
          <a href="https://glitch.com/~balloon-letter-guy">🎏</a></sup></p>
        </div>
      </div>
    );
  }
}

export default LetterInput;
