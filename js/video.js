var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	
});

var vid = document.getElementById("myVideo");

function play() {
    vid.play();
}

function pause() {
    vid.pause();
}
