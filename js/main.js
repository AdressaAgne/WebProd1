var video = document.getElementById("video");
var playbtn = document.getElementById("video-play");
var bar = document.getElementById("video-bar");
var timeCurrent = document.getElementById("video-current-time");
var timeTotal = document.getElementById("video-total-time");
var expand = document.getElementById("video-expand");
var block = document.getElementById("video-block");
var tags = document.getElementById("video-tags");
var wrapper = document.getElementById("video-wrapper");
var speed = document.getElementById("playbackRate");

var volume = document.getElementById("video-volume");
var volumebar = document.getElementById("video-volume-bar");
var volumebari = document.getElementById("video-volume-bar-inner");
var volumeDown = false;
var currentVol = 100;
var mute = false;

volume.addEventListener("click", function(event) {
	if (mute) {
		setVolume(currentVol);
		mute = false;
	} else {
		setVolume(0);
		mute = true;
	}
});

updateVolumeValueBar();

function setVolume(v) {
	video.volume = v;
	updateVolumeValueBar();
}

function updateVolumeValueBar() {
	var vol = video.volume * 100;
	volumebari.style.width = vol+"%";
	
	if (vol > 89) {
		volume.innerHTML = "<i class='fa fa-volume-up fa-fw'></i>";
		currentVol = video.volume;
	} else if (vol > 0 && vol < 90) {
		volume.innerHTML = "<i class='fa fa-volume-down fa-fw'></i>";
		currentVol = video.volume;
	} else {
		volume.innerHTML = "<i class='fa fa-volume-off fa-fw'></i>";
	}
}

speed.addEventListener("change", function() {
	video.playbackRate = this.value;
});

volumebar.addEventListener("mousedown", function(e) {
	volumeDown = true;
	setVolume(e.offsetX / volumebar.clientWidth);
});

document.addEventListener("mousemove", function(e) {
	if (volumeDown) {
		setVolume(e.offsetX / volumebar.clientWidth);
	}
});

playbtn.addEventListener("click", function() {
	playPause();
});
wrapper.addEventListener("click", function() {
	playPause();
});

function playPause() {
	if (video.paused) {
		video.play();
		wrapper.className = "video-wrapper";
		playbtn.innerHTML = "<i class='fa fa-pause fa-fw'></i>";
	} else {
		video.pause();
		wrapper.className = "video-wrapper pause";
		playbtn.innerHTML = "<i class='fa fa-play fa-fw'></i>";
	}
}

setInterval(function() {
	updateTimerBar();
}, 50);

var barDown = false;
bar.addEventListener("mousedown", function(e) {
	barDown = true;
	setCurrentTime(e)
});
function setCurrentTime(e) {
	var p = e.offsetX / bar.clientWidth * 100;
	var l = video.duration / 100;
	if (barDown) {
		video.currentTime = (p * l).toFixed(2);
	}
}
document.addEventListener("mousemove", function(e) {
	setCurrentTime(e)
});

document.addEventListener("mouseup", function(e) {
	barDown = false;
	volumeDown = false;
});


function toTime(sec) {
	
	var hours = Math.floor(sec / 3600);
	var minutes = Math.floor((sec - (hours * 3600)) / 60);
	var seconds = sec - (hours * 3600) - (minutes * 60);
	
	return hours + "h " + minutes + "m " + parseInt(seconds) + "s";
}

var pdf = [0, 15, 18, 20.53, 25, 30.67, 45.2, 50, 63.6, 68.3, 76.5, 80.4, 91, 100];
function updateTimerBar() {
	var l = video.duration;
	var c = video.currentTime;
	var p = c/l * 100;
	
	document.getElementById("video-progress-inner").style.width = p+"%";
	timeCurrent.textContent = toTime(c) + " (" + p.toFixed(2) + "%)";
	timeTotal.textContent = toTime(l) + " (100%)";
	
	
	if (p == 100) {
		wrapper.className = "video-wrapper pause";
		playbtn.innerHTML = "<i class='fa fa-refresh fa-fw'></i>";
		document.getElementById("pdf-image").setAttribute("data-current", 0);
	}
	
	var currentIMG = parseInt(document.getElementById("pdf-image").getAttribute("data-current"));
	
	
	if (!video.paused) {
		if (p >= Number(pdf[currentIMG]) && p <= Number(pdf[currentIMG+1])) {
			document.getElementById("pdf-image").src = "../img/pdf/"+(currentIMG+1)+".png";
			document.getElementById("pdf-image").setAttribute("data-current", currentIMG + 1);
		}
	}

}

document.getElementById("pdf-backward").addEventListener("click", function() {
	var currentIMG = parseInt(document.getElementById("pdf-image").getAttribute("data-current"));	
	jump(pdf[parseInt(currentIMG - 1)]);
	document.getElementById("pdf-image").setAttribute("data-current", parseInt(currentIMG) - 1);
	document.getElementById("pdf-image").src = "../img/pdf/"+(currentIMG)+".png";
	console.log(document.getElementById("pdf-image").getAttribute("data-current"));
});

document.getElementById("pdf-forward").addEventListener("click", function() {
	var currentIMG = parseInt(document.getElementById("pdf-image").getAttribute("data-current"));
	
	jump(pdf[parseInt(currentIMG + 1)]);
	
	document.getElementById("pdf-image").setAttribute("data-current", parseInt(currentIMG) + 1);
	document.getElementById("pdf-image").src = "../img/pdf/"+(currentIMG+2)+".png";
	console.log(document.getElementById("pdf-image").getAttribute("data-current"));
});

function jump(p) {
	var l = video.duration / 100;
	video.currentTime = p * l;
}

function resize() {
	if (block.className == "col-12") {
		block.className = "col-8";
		document.getElementById("text").className = "col-4";
		expand.innerHTML = "<i class='fa fa-expand fa-fw'></i>"
	} else {
		block.className = "col-12";
		document.getElementById("text").className = "col-8";
		expand.innerHTML = "<i class='fa fa-compress fa-fw'></i>"
	}
}

expand.addEventListener("click", function() {
	resize();
});

video.addEventListener("dblclick", function() {
	resize();
});

tags.addEventListener("click", function(e) {
	e = e.target;
	if (e.className == "tag hand") {
		var p = e.getAttribute("data-time");
		var l = video.duration / 100;
		video.currentTime = p * l;
	}
});