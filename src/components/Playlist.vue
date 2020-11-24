<template>
  <v-container class="rounded-tr-xl rounded-bl-0 pa-6 pos-relative" :class="isDarkMode ? 'bg-dark-light white--text' : 'bg-white-light'">
    <div align="left">
      <h2 class="d-inline">My</h2>
      <v-icon v-if="isPlaylistLiked" class="align-top" :color="isDarkMode ? 'white' : '#151821'">mdi-heart</v-icon>
      <h2 class="d-inline">Playlist</h2>
    </div>

    <SearchBar :searchInPlaylist="searchInPlaylist" :is-dark-mode="isDarkMode"></SearchBar>

    <v-list-item v-for="(music, index) in getPlaylist" :key="index" class="pa-0 item-music" @click="clickOnMusic(index, $event)" v-show="!isPlaylistLiked || music.liked">
        <v-icon @click="clickOnAddPlaylist(index)" class="pr-2 icon-add-next d-none" :color="isDarkMode ? 'white' : '#151821'">mdi-playlist-plus</v-icon>
        <v-list-item-avatar class="rounded-lg">
          <v-img :src="require(`../assets/img/${music.img}`)"></v-img>
        </v-list-item-avatar>
        <v-list-item-content align="left" :class="isDarkMode ? 'white--text' : ''" class="pl-3">
          <v-list-item-title class="ma-0 pb-1"><h3>{{ music.title }}</h3></v-list-item-title>
          <v-list-item-subtitle :class="isDarkMode ? 'white--text' : ''"><h4>{{ music.author }}</h4></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-btn @click="togglePlaylist" class="btn-liked rounded-xl pl-8 pr-8">{{ isPlaylistLiked ? 'Tous mes titres' : 'Mes titres likés' }}</v-btn>

  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "PlayerAddMusic",
  components: {SearchBar},
  data: () => ({
    isPlaylistLiked: false,
    inputSearch: ''
  }),
  props: {
    isDarkMode: Boolean,
    musicList: Array,
    changeMusic: Function,
    addMusicToPlaylist: Function
  },
  methods: {
    clickOnMusic(index, event) {
      if(!event.target.classList.contains('icon-add-next')){
        this.changeMusic(index);
      }
    },
    togglePlaylist() {
      this.isPlaylistLiked = !this.isPlaylistLiked;
    },
    clickOnAddPlaylist(index) {
      this.addMusicToPlaylist(index);
    },
    searchInPlaylist(search){
      this.inputSearch = search;

    }
  },
  computed: {
    getPlaylist(){
      if(this.inputSearch.length > 2) {
        return this.musicList.filter(item =>
          item.title.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          item.author.toLowerCase().includes(this.inputSearch.toLowerCase())
        );
      }else{
        return this.musicList
      }
    }
  }
}
</script>

<style scoped>
h4{
  opacity: 0.5;
}
.align-top{
  margin-top: -8px;
}
.pos-relative{
  position: relative;
}
.btn-liked{
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.item-music:hover .icon-add-next{
  display: inline-flex !important;
}
</style>