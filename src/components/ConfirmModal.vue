<template>
  <v-card class="d-inline-block pl-4 pr-4" :class="isDarkMode ? 'bg-dark white--text' : ''">
    <v-card-title>"{{ title }}" a bien été ajouté à la file d'attente</v-card-title>
  </v-card>
</template>

<script>

export default {
  name: "ConfirmModal",
  props: {
    title: String,
    isDarkMode: Boolean
  }
}
</script>

<style scoped>

</style>