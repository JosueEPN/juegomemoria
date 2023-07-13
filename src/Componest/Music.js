import React, { Component } from "react";
import song from "../media/Sound1.mp3";
import ReactHowler from "react-howler";
import { Button } from "antd";
import "../Style/App.css";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

class Music extends Component {
  constructor() {
    super();

    this.state = {
      playing: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      playing: !prevState.playing,
    }));
  }

  render() {
    const { playing } = this.state;

    return (
      <div>
        <ReactHowler src={song} playing={playing} loop={true} volume={0.05} />
        {playing ? (
          <Button onClick={this.handleToggle}> <AiFillPauseCircle /> </Button>
        ) : (
          <Button onClick={this.handleToggle} className="btn-music">
           <AiFillPlayCircle />
          </Button>
        )}
      </div>
    );
  }
}

export default Music;
