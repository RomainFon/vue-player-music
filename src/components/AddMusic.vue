<template>
  <v-container class="position-add rounded-xl" :class="isDarkMode ? 'bg-dark-light white--text' : 'bg-white'">
    <v-icon @click="closeAddMusic" class="close-icon pa-4" large>mdi-close-circle</v-icon>
    <h1 class="pa-4">Ajouter une musique</h1>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "AddMusic",
  props: {
    isDarkMode: Boolean
  },
  methods: {
    closeAddMusic() {
      router.push({ path: `/` });
    }
  },
  }
</script>

<style scoped>
.position-add{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  top: 0;
  background-color: white;
}
.close-icon{
  position: absolute;
  top: 0;
  left: 0;
}
</style>