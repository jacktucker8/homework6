var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log ("Pause Video");
	
});



function play() {
	video.play();
}

function pause() {
	video.pause();
}
