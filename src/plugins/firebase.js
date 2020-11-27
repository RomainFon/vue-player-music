import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from "../config/firebase";

import Vue from "vue";

const firebaseApp = firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebaseApp;