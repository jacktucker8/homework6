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
	video.playbackRate= video.playbackRate * .9;
	
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate= video.playbackRate * 1.1;
	
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime= video.currentTime + 5;
	
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted= true
		document.getElementById("mute").innerText="Unmute"}
		else {
		video.muted = false
		document.getElementById("mute").innerText="Mute"}
	
});
