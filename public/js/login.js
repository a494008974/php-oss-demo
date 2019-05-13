import Vue from 'vue';
import VueBus from 'vue-bus';

import axios from 'axios/dist/axios.js';

Vue.use(VueBus);
window.Vue = Vue;
Vue.prototype.$axios = axios;


import Login from './components/Login.vue';
Vue.component('Login',Login);

const app = new Vue({
    el: '#app'
});
