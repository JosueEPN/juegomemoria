import React from "react";

const Start_GameOver = ({}) => {
	return (
		<div className="">
			<canvas id="canvas"></canvas>
			<div id="start">
				<a href="#" onclick="startGame()">
					Start Game
				</a>
			</div>
			<div id="game-over">
				<h1>Game Over</h1>
				<a href="#" onclick="startGame()">
					Start Game
				</a>
			</div>
		</div>
	);
};

export default Start_GameOver;
