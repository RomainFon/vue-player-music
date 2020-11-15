<template>
  <v-container class="position-about rounded-tl-xl" :class="isDarkMode ? 'bg-dark-light white--text' : 'bg-white'">
    <v-icon @click="closeAbout" class="close-icon pa-4" large>mdi-close-circle</v-icon>
    <v-row>
      <v-col class="pa-1">
        <h2>A propos</h2>
        <v-row class="pl-8 pr-8">
          <v-col class="col-4">
            <v-icon class="pa-2" color="#151821" large>mdi-account</v-icon>
            <h5>Artiste</h5>
            <h4>{{ music.author }}</h4>
          </v-col>
          <v-col class="col-4">
            <v-icon class="pa-2" color="#151821" large>mdi-music</v-icon>
            <h5>Titre</h5>
            <h4>{{ music.title }}</h4>
          </v-col>
          <v-col class="col-4">
            <v-icon class="pa-2" color="#151821" large>mdi-album</v-icon>
            <h5>Album</h5>
            <h4>{{ music.album }}</h4>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import router from "@/router";
import json from '../assets/json/musics.json';
import Music from '../models/Music';

export default {
  name: "AboutMusic",
  props: {
    isDarkMode: Boolean
  },
  methods: {
    closeAbout() {
      router.push({ path: `/` });
    }
  },
  data: () => ({
    music: null,
  }),
  created() {
    this.music = new Music(json.musics[this.$route.params.id]);
    console.log(this.music);
  }
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .position-about{
    width: 100% !important;
    border-top-right-radius: inherit;
  }
}
.position-about{
  position: absolute;
  min-width: 280px;
  width: 60%;
  z-index: 4 ;
  top: 0;
  border-bottom-right-radius: inherit;
}
.close-icon{
  position: absolute;
  top: 0;
  left: 0;
}
h5{
  opacity: 0.5;
}
</style>