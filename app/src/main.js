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
 * Stylus is used for this boilerplate.
 */
import "./assets/sass/app.scss";

/* ============
 * Vuetify Styling
 * ============
 *
 * Import the vuetify styling.
 */
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
Vue.use(Vuetify)
Vue.use(Vuelidate)

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
