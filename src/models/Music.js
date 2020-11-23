export default class Music {
    constructor(music) {
        this.title = music.title;
        this.author = music.author;
        this.img = music.img;
        this.url = music.url;
        this.album = music.album;
        if(music.author === 'Laylow'){
            this.liked = true;
        }else{
            this.liked = false;
        }

    }
}