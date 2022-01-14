import React, { Component } from 'react';

const imageMap = {
  "a": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FA.png?v=1598655926755",
  "b": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FB.png?v=1598655927118",
  "c": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FC.png?v=1598655926936",
  "d": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FD.png?v=1598658932461",
  "e": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FE.png?v=1598658932332",
  "f": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FF.png?v=1598658932473",
  "g": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FG.png?v=1598658932630",
  "h": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FH.png?v=1598658932741",
  "i": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FI.png?v=1598658932716",
  "j": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FJ.png?v=1598658932764",
  "k": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FK.png?v=1598658932925",
  "l": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FL.png?v=1598662509737",
  "m": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FM.png?v=1598658933049",
  "n": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FN.png?v=1598658933244",
  "o": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FO.png?v=1598658933079",
  "p": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FP.png?v=1598658933062",
  "q": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FQ.png?v=1598658933177",
  "r": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FR.png?v=1598658933288",
  "s": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FS.png?v=1598658933427",
  "t": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FT.png?v=1598658932441",
  "u": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FU.png?v=1598658933441",
  "v": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FV.png?v=1598658933374",
  "w": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FW.png?v=1598658933692",
  "x": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FX.png?v=1598658933714",
  "y": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FY.png?v=1598658933575",
  "z": "https://cdn.glitch.com/0210577d-4e2e-4912-922b-04de999965b4%2FZ.png?v=1598658933645",
  ".": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FPeriod.png?v=1598664993688",
  "?": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FQuestion%20mark.png?v=1598662857391",
  ",": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FComma.png?v=1598664990856",
  "\'": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FApostrophe.png?v=1598665078799",
  "\"": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FQuote.png?v=1598665247592",
  "!": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FExclamation.png?v=1598666890035",
  "-": "https://cdn.glitch.com/43a8b424-1c3f-4ee7-b644-91828372f479%2FDash.png?v=1598667104659",
};

class Letter extends Component {
  render() {
    const {value} = this.props;
    const {hueRotation} = this.props;
    
    let rotation = Math.floor(Math.random() * 10) - 5;
    let scale = 1 - (Math.random()/20 - .1);
    
    const styles = {
      marginRight:".05em", 
      marginBottom: ".2em", 
      height: "1em", 
      transform: "scale(" + scale + ") rotateZ(" + rotation + "deg)",
      filter: "drop-shadow(-0.52vw 0.632vw 1.15vw rgba(0, 0, 0, 0.41)) drop-shadow(-0.316vw 0.316vw 0.316vw rgba(0, 0, 33, 0.4)) hue-rotate(" + hueRotation + "deg)",
    }
    
    if (value == '\n') {
      return (<div style={{width: "100%"}}/>)
    } else if (value == ' ') {
      return (<span style={{width:".4em", height:"1em", display:"inline-block"}}/>);
    }
    return (
      <img className="letter" src={imageMap[value]} style={styles}/>
    );
  }
}

export default Letter;
