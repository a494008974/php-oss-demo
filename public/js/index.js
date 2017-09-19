import jQuery from 'jquery';
window.jQuery = jQuery;
require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
window.Vue = Vue;
require('./iview');


const app = new Vue({
    el: '#app'
});
