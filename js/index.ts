import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/Autoplay'
import AutoPause from './plugins/Autopause'
import AdsPlugin from './plugins/Ads'

const video: HTMLElement = document.querySelector("video");
const buttonPlay: HTMLElement = document.getElementById("play");
const buttonMute: HTMLElement = document.getElementById("sound");

const player: MediaPlayer = new MediaPlayer({
    element: video,
    plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()]
});

buttonPlay.onclick = () => {
    player.controlPlay();
}

buttonMute.onclick = () => {
    player.toggleMute();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log(err))
}