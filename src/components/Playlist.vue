<template>
  <v-container class="rounded-tr-xl rounded-bl-0 pa-6" :class="isDarkMode ? 'bg-dark-light white--text' : 'bg-white-light'">
    <h2 align="left">Ma Playlist</h2>

    <v-list-item v-for="(music, index) in musicList" :key="index" class="pa-0" @click="clickOnMusic(index)">
      <v-list-item-avatar class="rounded-lg">
        <v-img :src="require(`../assets/img/${music.img}`)"></v-img>
      </v-list-item-avatar>
      <v-list-item-content align="left" :class="isDarkMode ? 'white--text' : ''">
        <v-list-item-title><h3>{{ music.title }}</h3></v-list-item-title>
        <v-list-item-subtitle :class="isDarkMode ? 'white--text' : ''"><h4>{{ music.author }}</h4></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-container>
</template>

<script>
export default {
  name: "PlayerAddMusic",
  props: {
    isDarkMode: Boolean,
    musicList: Array,
    changeMusic: Function
  },
  methods: {
    clickOnMusic(index) {
      this.changeMusic(index);
    }
  }
}
</script>

<style scoped>
h4{
  opacity: 0.5;
}
</style>