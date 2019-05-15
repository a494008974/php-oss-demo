import Vue from 'vue';
import VueBus from 'vue-bus';
Vue.use(VueBus);

import axios from 'axios/dist/axios.js';
Vue.prototype.$axios = axios;

import iviewcss from 'iview/dist/styles/iview.css';
Vue.use(iviewcss);

import iview from 'iview';
Vue.use(iview);

window.Vue = Vue;