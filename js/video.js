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

video.addEventListener("volumechange", function() {
      console.log('volumeSlider');
      console.log('Volume is: ' + video.volume);
});
