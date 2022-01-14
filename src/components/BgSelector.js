import React, { Component } from "react";
import "./BgSelector.css";

class BgSelector extends Component {
  handleBgItemClick(index) {
    const {onBgSelected} = this.props;
    onBgSelected(index);
  }
  render() {
    const { bgData } = this.props;
    return (
      <div className="bgSelectorContainer">
        {bgData.map((data, index) => (
          <div className="bgSelectorItem" onClick={()=>{this.handleBgItemClick(index)}}>
            <img className="bgSelectorThumbnail" src={data.thumbnail_src} />
          </div>
        ))}
      </div>
    );
  }
}

export default BgSelector;
