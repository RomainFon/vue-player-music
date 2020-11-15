<template>
  <div class="full-screen">
    <v-img class="cover-bg" :src="require(`../assets/img/${musicList[currentMusic].img}`)" height="100vh" width="100%"></v-img>
    <v-container class="center-div">
      <v-row class="text-center" justify="center">
        <v-col class="col-lg-8 col-xl-6 col-10 pa-0">
          <v-card width="100%" min-height="560px" class="rounded-xl d-flex transparent">
            <v-icon @click="openAbout" class="about-icon pa-4" large>mdi-information</v-icon>
            <router-view :isDarkMode="isDarkMode"/>
            <Music class="effect-width" :music="musicList[currentMusic]" :pause="pause" :next="next" :prev="prev" :isDarkMode="isDarkMode" :class="isPlaylistOpen ? 'music-open-playlist' : 'music-default'"/>
            <div class="settings">
              <v-icon @click="pressPlaylist" :color="isDarkMode ? 'white' : '#151821'" class="pa-4 rounded-tr-xl" :class="isDarkMode ? 'bg-dark' : 'bg-white'">mdi-playlist-music</v-icon>
              <v-icon @click="addMusic" :color="isDarkMode ? 'white' : '#151821'" class="pa-4" :class="isDarkMode ? 'bg-dark' : 'bg-white'">mdi-plus</v-icon>
              <v-icon @click="toggleMode" :color="isDarkMode ? 'white' : '#151821'" class="pa-4 rounded-bl-xl" :class="isDarkMode ? 'bg-dark' : 'bg-white'">mdi-white-balance-sunny</v-icon>
            </div>
            <Playlist class="rounded-custom" :changeMusic="changeMusic" :musicList="musicList" :isDarkMode="isDarkMode" :class="isPlaylistOpen ? 'open-playlist' : 'close-playlist'"></Playlist>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import json from '../assets/json/musics.json';
import mMusic from "@/models/Music";
import Music from './Music';
import Playlist from './Playlist';
import router from "@/router";

export default {
  name: "Player",
  components: {
    Music,
    Playlist
  },
  created() {
    for (let i in json.musics) {
      this.musicList.push(new mMusic(json.musics[i]));
    }
    if (this.musicList) {
      this.currentMusic = 0;
    }
  },
  data: () => ({
    musicList: [],
    currentMusic: null,
    isDarkMode: true,
    isPlaylistOpen: false,
    pause: false,
  }),
  methods: {
    next() {
      if(this.currentMusic === this.musicList.length - 1) {
        this.currentMusic = 0;
      }else{
        this.currentMusic++;
      }
    },
    prev() {
      if(this.currentMusic === 0) {
        this.currentMusic = this.musicList.length - 1;
      }else{
        this.currentMusic--;
      }
    },
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    pressPlaylist() {
      this.isPlaylistOpen = !this.isPlaylistOpen;
    },
    changeMusic(index){
      if(index !== this.currentMusic) {
        this.pause = true;
        this.currentMusic = index;
      }
    },
    openAbout() {
      router.push({ path: `/about/${this.currentMusic}` });
    },
    addMusic() {
      router.push({ path: `/add` });
    }
  }
}
</script>

<style scoped>
.full-screen{
  height: 100vh;
}
.center-div{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.cover-bg{
  position: absolute;
}
.cover-bg::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
}
.settings{
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}
.open-playlist{
  width: 40%;
}
.close-playlist{
  width: 0;
  display: none;
}
.music-open-playlist{
  width: 60%;
  border-bottom-right-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.music-default{
  width: 100%;
}
.about-icon{
  position: absolute;
  z-index: 2;
}

@media screen and (max-width: 800px) {
  .open-playlist{
    width: 100% !important;
    z-index: 2;
    border-bottom-left-radius: 40px !important;
    border-top-left-radius: 40px !important;
  }
  .music-open-playlist{
    width: 0 !important;
    display: none !important;
  }
}
</style>