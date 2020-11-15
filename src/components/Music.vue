<template>
  <v-card :class="isDarkMode ? 'bg-dark white--text' : ''" class="rounded-inherit">
    <v-img height="300" :src="require(`../assets/img/${music.img}`)"></v-img>
    <v-container>
      <v-row class="text-center" justify="center" align="center">
        <v-col class="col-12">
          <h2>{{ music.title }}</h2>
          <h4 :class="isDarkMode ? 'white--text' : ''">{{ music.author }}</h4>
        </v-col>
        <v-col class="col-12 menu-controls">
          <v-icon @click="pressPrev()" :color="isDarkMode ? 'white' : '#151821'">mdi-skip-previous</v-icon>
          <v-icon class='play-control' @click="pressPlayPause()" :color="isDarkMode ? 'white' : '#151821'">{{ isPlay ? 'mdi-pause-circle' : 'mdi-play-circle' }}</v-icon>
          <v-icon @click="pressNext()" :color="isDarkMode ? 'white' : '#151821'">mdi-skip-next</v-icon>
        </v-col>
        <v-col class="col-12 d-flex align-center">
          <span class="current-time time">{{ transformTime(currentTime) }}</span>
          <v-progress-linear :value="getValueProgress" :color="isDarkMode ? 'white' : '#151821'"></v-progress-linear>
          <span class="end-time time">{{ transformTime(totalTime) }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

import Music from "@/models/Music";

export default {
  name: "Music",
  props: {
    music: Music,
    next: Function,
    prev: Function,
    isDarkMode: Boolean,
    pause: Boolean
  },
  data: () => ({
    isPlay: false,
    audio: null,
    currentAudioUrl: null,
    currentTime: 0,
    totalTime: 0
  }),
  beforeUpdate() {
    if(this.pause){
      if(this.music.url !== this.currentAudioUrl){
        this.isPlay = false;
      }
    }
  },
  updated() {
    if(this.music.url !== this.currentAudioUrl){
      this.updateAudio();
    }
  },
  mounted() {
    this.updateAudio(false);
  },
  beforeDestroy() {
    this.audio.pause();
  },
  methods: {
    pressNext() {
      this.setPause();
      this.next();
    },
    pressPrev() {
      this.setPause();
      this.prev();
    },
    pressPlayPause() {
      this.togglePlayPause();
    },
    togglePlayPause() {
      this.isPlay = !this.isPlay;
    },
    setPause(){
      this.isPlay = false;
    },
    updateAudio(autoplay = true) {
      this.currentAudioUrl = this.music.url;
      this.audio = new Audio(require(`../assets/musics/${this.music.url}`));
      if(autoplay){
        this.togglePlayPause();
      }

      this.audio.addEventListener('ended', () => {
        this.pressNext(true);
      });
      this.audio.addEventListener('loadedmetadata', () => {
        this.totalTime = this.audio.duration;
      });
      this.audio.addEventListener('timeupdate', () => {
        this.currentTime = this.audio.currentTime;
      });
    },
    transformTime(time) {
      let minutes = Math.floor(Math.round(time) / 60);
      let seconds = Math.round(time) - minutes * 60;
      if(seconds < 10){
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    }
  },
  computed: {
    getValueProgress(){
      return Math.round(this.currentTime * 100 / this.totalTime);
    }
  },
  watch: {
    isPlay(value) {
      if(value) {
        this.audio.play();
      }else{
        this.audio.pause();
      }
    }
  }
}
</script>

<style scoped>
.time{
  padding: 0 20px;
}
h4{
  opacity: 0.5;
}
.menu-controls button{
  font-size: 40px;
  opacity: 0.4;
}
.play-control{
  font-size: 80px !important;
  opacity: 0.9 !important;
  padding: 0 20px;
}
.current-time{
  opacity: 0.8;
}
.end-time{
  opacity: 0.5;
}
.rounded-inherit{
  border-radius: inherit !important;
}
</style>