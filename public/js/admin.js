import Vue from 'vue';
import VueBus from 'vue-bus';

Vue.use(VueBus);
window.Vue = Vue;

require('./iview');

import Navigation from './components/Navigation.vue';
Vue.component('znavigation',Navigation);

import Content from './components/Content.vue';
Vue.component('ncontent',Content);

import SliderNav from './components/SilderNav.vue';
Vue.component('nslidernav',SliderNav);

import ContentTab from './components/ContentTab.vue';
Vue.component('ncontenttab',ContentTab);


const app = new Vue({
    el: '#app'
});
