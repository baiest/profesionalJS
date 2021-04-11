class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.hadleIntersection = this.hadleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.hadleIntersection, {
            threshold: this.threshold
        });

        observer.observe(player.media);
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }


    hadleIntersection(entries) {
        const entry = entries[0];
        console.log(entry)

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

}

export default AutoPause;