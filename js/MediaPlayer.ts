class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLDivElement;

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    controlPlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}

export default MediaPlayer