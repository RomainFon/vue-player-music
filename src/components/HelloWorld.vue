<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <h1>Hello la promo Ynov !</h1>
    <h3>Bienvenue sur Ynov Songs :)</h3>

    <button @click="loaded = true">Chargement des Todos</button>
    <Todos v-if="loaded"></Todos>

    <p>Nb de count: {{ count }}</p>
    <button @click="add" class="btn">Ajouter une plus !</button>
    <button @click="remove" class="btn">Diminuer une plus !</button>

    <p v-if="count >= 10">Win!</p>
    <p v-else-if="count > 5">Win!!!!!!</p>
    <p v-else>Loose!</p>

    <h1 v-show="count > 10">Hello!</h1>

    <h4>Prénom:</h4>

    <input v-model="nbDisplay" type="range" min="0" max="6" />
    <input
      v-model="search"
      type="search"
      required
      placeholder="recherche un prénom"
    />
    <p :class="colorNb">
      Nb de prénom<span v-if="prenoms.length > 1">s</span>: {{ prenoms.length }}
    </p>
    <input
      v-model="prenom"
      type="text"
      required
      placeholder="Ajouter un prénom"
    />
    <button @click="ajouterPrenom">Ajouter</button>
    <p>Nb de stars: {{ nbLike }} likes</p>
    <p v-if="goodColor">Vous êtes une star !</p>
    <Liste :filterPrenoms="filterPrenoms">
      <template v-slot:header>
        <h1>Liste des {{ filterPrenoms.length }} prénoms</h1>
      </template>
    </Liste>
  </v-container>
</template>

<script>
import Liste from "./Liste"; // 1 import
import Todos from "./Todos";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      loaded: false,
      count: 0,
      colorNb: "blue",
      prenom: "",
      search: "",
      nbDisplay: 3,
      prenoms: ["Steven", "Julien", "Guillaume", "Baptiste"],
    };
  },
  methods: {
    load() {
      this.loaded = true;
    },
    ajouterPrenom() {
      this.prenoms.push(this.prenom);
      this.prenom = "";
      if (this.prenoms.length >= 15) {
        this.colorNb = "red";
      }
    },
    add() {
      this.count++;
    },
    remove() {
      this.count--;
    },
  },
  components: {
    Liste, // 2 use
    Todos,
  },
  computed: {
    nbLike() {
      return this.prenoms.length * this.count;
    },
    goodColor() {
      return this.nbLike > 30;
    },
    filterPrenoms() {
      if (this.search.length < 3) {
        return this.prenoms;
      } else {
        return this.prenoms.filter((elt) => elt.includes(this.search));
      }
    },
  },
  watch: {
    nbLike(val) {
      if (val > 40) {
        this.prenoms = [];
      }
    },
    nbDisplay(val) {
      this.prenoms = this.prenoms.slice(0, val);
      if (val == 0) {
        this.prenoms = ["Steven", "Julien", "Guillaume", "Baptiste"];
      }
    },
  },
};
</script>
