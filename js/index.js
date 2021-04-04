import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonMute = document.getElementById("sound");

const player = new MediaPlayer({
    element: video,
    plugins: [ /*new AutoPlay()*/ ]
});

buttonPlay.onclick = () => {
    player.controlPlay();
}

buttonMute.onclick = () => {
    player.toggleMute();
}