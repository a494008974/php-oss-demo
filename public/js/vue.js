import Vue from 'vue';
import VueBus from 'vue-bus';
Vue.use(VueBus);

import axios from 'axios/dist/axios.js';
Vue.prototype.$axios = axios;

import iview from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iview);

window.Vue = Vue;

