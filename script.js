const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const time = document.querySelector('#timestamp');


// play pause video
function toggleVideStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>'
    }
}

//update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // get minutes 
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    //get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}


// set video progress 
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

//stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}




// Event Listener
video.addEventListener('click', toggleVideStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);