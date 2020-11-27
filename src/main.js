import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = true

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', { scope: '/'}).then(() => {
    console.log('Service Worker déclaré !');
  }).catch(error => {
    console.error('Erreur: ', error);
  });
}

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')