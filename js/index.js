import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'
import AutoPause from './plugins/Autopause.js'

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonMute = document.getElementById("sound");

const player = new MediaPlayer({
    element: video,
    plugins: [new AutoPlay(), new AutoPause()]
});

buttonPlay.onclick = () => {
    player.controlPlay();
}

buttonMute.onclick = () => {
    player.toggleMute();
}