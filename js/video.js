let video = document.getElementById("player1");
let playButton = document.getElementById("play");
let volumeSlider = document.getElementById("slider");
let volumeDisplay = document.getElementById("volume");
let pauseButton = document.getElementById("pause");
let slowDownButton = document.getElementById("slower");
let speedUpButton = document.getElementById("faster");
let skipButton = document.getElementById("skip");
let muteButton = document.getElementById("mute");
let oldSchoolButton = document.getElementById("vintage");
let originalButton = document.getElementById("orig")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function () {
	video.autoplay = false;
	video.loop = false;
	video.load();
});

playButton.addEventListener("click", function () {
	video.play();
});

pauseButton.addEventListener("click", function () {
	video.pause();
});

volumeSlider.addEventListener("input", function () {
	let volume = volumeSlider.value / 100; 
	video.volume = volume;
	volumeDisplay.textContent = volumeSlider.value + "%";
});

let slowFactor = 0.9;  
let speedFactor = 1 / slowFactor;

slowDownButton.addEventListener("click", function () {
	video.playbackRate *= slowFactor; 
	console.log("New playback speed:", video.playbackRate.toFixed(2));
});

speedUpButton.addEventListener("click", function () {
	video.playbackRate *= speedFactor;  
	console.log("New playback speed:", video.playbackRate.toFixed(5));
});

skipButton.addEventListener("click", function () {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0; 
	} else {
		video.currentTime += 10;
	}
	console.log("Current video time:", video.currentTime.toFixed(2), "seconds");
});

muteButton.addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		muteButton.textContent = "Mute";
	} else {
		video.muted = true;
		muteButton.textContent = "Unmute";
	}
});

oldSchoolButton.addEventListener("click", function () {
	video.classList.add("oldSchool");
});

originalButton.addEventListener("click", function () {
    video.classList.remove("oldSchool");
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

