<template>
  <v-container class="rounded-tr-xl rounded-bl-0 pa-6 pos-relative" :class="isDarkMode ? 'bg-dark-light white--text' : 'bg-white-light'">
    <div align="left">
      <h2 class="d-inline">My</h2>
      <v-icon v-if="isPlaylistLiked" class="align-top" :color="isDarkMode ? 'white' : '#151821'">mdi-heart</v-icon>
      <h2 class="d-inline">Playlist</h2>
    </div>

    <v-list-item v-for="(music, index) in musicList" :key="index" class="pa-0" @click="clickOnMusic(index)" v-show="!isPlaylistLiked || music.liked">
      <v-list-item-avatar class="rounded-lg">
        <v-img :src="require(`../assets/img/${music.img}`)"></v-img>
      </v-list-item-avatar>
      <v-list-item-content align="left" :class="isDarkMode ? 'white--text' : ''">
        <v-list-item-title><h3>{{ music.title }}</h3></v-list-item-title>
        <v-list-item-subtitle :class="isDarkMode ? 'white--text' : ''"><h4>{{ music.author }}</h4></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-btn @click="togglePlaylist" class="btn-liked">{{ isPlaylistLiked ? 'Tous mes titres' : 'Mes titres likés' }}</v-btn>

  </v-container>
</template>

<script>
export default {
  name: "PlayerAddMusic",
  data: () => ({
    isPlaylistLiked: false
  }),
  props: {
    isDarkMode: Boolean,
    musicList: Array,
    changeMusic: Function
  },
  methods: {
    clickOnMusic(index) {
      this.changeMusic(index);
    },
    togglePlaylist() {
      this.isPlaylistLiked = !this.isPlaylistLiked;
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
</style>