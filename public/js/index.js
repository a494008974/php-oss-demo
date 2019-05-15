import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import Index from './components/Index.vue';
Vue.component('Index',Index);
var app = new Vue({
    el: '#app',
    delimiters : ['[[', ']]'],
    data: {
        msg: 'Hello Vue!'
    }
})


