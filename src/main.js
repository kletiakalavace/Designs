/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 */
import "./assets/sass/app.scss";
import "./assets/sass/responsive.scss";

/* ============
 * Vuetify Styling
 * ============
 *
 * Import the vuetify styling.
 */
import 'vuetify/dist/vuetify.min.css'
//import './assets/stylus/main.styl'

// Import Helpers for filters
import { count } from './filters'
// Import Install and register helper items
Vue.filter('count', count)

Vue.config.productionTip = false;
Vue.use(Vuetify)
Vue.use(Vuelidate)

/* ============
 * Components
 * ============
 *
 * Register layouts components
 */
import DefaultLayout from './layouts/Default';
Vue.component('o-default-layout', DefaultLayout);

/*
 * Register components
 */
import Header from './components/Header';
import Navigation from './components/Navigation';
Vue.component('o-header', Header);
Vue.component('o-navigation', Navigation);

new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',

  /**
   * The router.
   */
  router,

  components: { App },

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
});
