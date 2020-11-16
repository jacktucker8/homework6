var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	function play() {
		vid.play();
}
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log ("Pause Video");
	function pause() {
		vid.pause();
}

	
});

