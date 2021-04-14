import MediaPlayer from './../../MediaPlayer';
import Ads, { Ad } from './Ads'
class AdsPlugin {
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private ads: Ads;
    private currentAd: Ad = null;
    constructor(){
        this.ads = Ads.getInstance();
        this.handlerTimeUpdate = this.handlerTimeUpdate.bind(this);
    }

    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handlerTimeUpdate)
    }

    private handlerTimeUpdate(){
        const currentTime =Math.floor(this.media.currentTime);
        if(currentTime % 10 === 0){
            this.renderAd();
        }else{
            console.log(currentTime);
            this.currentAd = null
        }
    }

    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(ad);
    }
}

export default AdsPlugin;