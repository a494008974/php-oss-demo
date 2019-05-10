import Vue from 'vue';
import VueBus from 'vue-bus';

Vue.use(VueBus);
window.Vue = Vue;


import Login from './components/Login.vue';
Vue.component('Login',Login);

const app = new Vue({
    el: '#app'
});
