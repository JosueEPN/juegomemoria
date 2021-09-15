import React, { Component } from "react";
import song from "../media/Sound1.mp3";
import ReactHowler from "react-howler";
import { Button } from "antd";

class Music extends Component {
	constructor() {
		super();

		this.state = {
			playing: false,
		};
		this.handlePlay = this.handlePlay.bind(this);
		this.handlePause = this.handlePause.bind(this);
	}

	handlePlay() {
		this.setState({
			playing: true,
		});
	}

	handlePause() {
		this.setState({
			playing: false,
		});
	}

	render() {
		return (
			<div>
				<ReactHowler
					src={song}
					playing={this.state.playing}
					loop="true"
					volume="0.05"
				/>
				;<Button onClick={this.handlePlay}>Play</Button>
				<Button onClick={this.handlePause}>Pause</Button>
			</div>
		);
	}
}

export default Music;
