<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
html{
 overflow: hidden;
}
.bg-dark{
  background-color: #151821 !important;
}
.bg-dark-light{
  background-color: #2a2e3b !important;
}
.bg-white{
  background-color: #FFFFFF !important;
}
.bg-white-light{
  background-color: #e6e9f2 !important;
}
.v-icon::after{
  height: 0 !important;
}
</style>
