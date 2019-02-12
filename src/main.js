// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Initialize Firebase
export const config = {
  apiKey: 'AIzaSyBIzVEnptBmQoK9J1mb6Dg7A38ijQj8UVQ',
  authDomain: 'slackclone-742a1.firebaseapp.com',
  databaseURL: 'https://slackclone-742a1.firebaseio.com',
  projectId: 'slackclone-742a1',
  storageBucket: 'slackclone-742a1.appspot.com',
  messagingSenderId: '329881477067'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
