import Vue from 'vue'
import App from './App.vue'
import FullPage from 'vue-fullpage.js'
//import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true

Vue.use(FullPage);

new Vue({
    el: '#app',
    render: h => h(App),
});
