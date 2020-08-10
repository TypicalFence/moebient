import { BackgroundService, BackgroundImage } from "./base.js";

class UnsplashService extends BackgroundService {
    constructor() {
        super();
        this.query = process.env.UNSPLASH_QUERY;
    }

    async getImage() {
        const url = await fetch("https://source.unsplash.com/random/1920x1080?" + this.query).then(x => x.url);
        return new BackgroundImage({ url });
    }
}

export default UnsplashService;
