<template>
  <v-text-field :color="isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'" label="Chercher une musique, un artiste." class="custom-text-input" v-model="searchInput"></v-text-field>
</template>

<script>
export default {
  name: "SeachBar",
  data: () => ({
    searchInput: ''
  }),
  props: {
    searchInPlaylist: Function,
    isDarkMode: Boolean
  },
  mounted() {
    const vtf = document.querySelector('.custom-text-input');
    vtf.addEventListener('keyup', () => {
      this.searchInPlaylist(this.searchInput);
    });
  }
}
</script>

<style scoped>
.custom-text-input{
  width: 80%;
}
</style>