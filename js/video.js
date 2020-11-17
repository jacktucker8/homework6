var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackrate()= .1;
	
});
