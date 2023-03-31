import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from "axios"
//import './mock/mock.js';
import 'font-awesome/css/font-awesome.css'

Vue.prototype.axios = axios;

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faThumbsUp, faThumbsDown,faRetweet,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faMagnifyingGlass,faSearch,faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faThumbsUp, faThumbsDown,faRetweet,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload,faMagnifyingGlass,faSearch,faLongArrowAltLeft);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(Buefy, {
  // defaultIconComponent: 'vue-fontawesome',
  // defaultIconPack: 'fas',
  defaultStatusIcon: true,
  defaultToastDuration: 3000,
  defaultToastPosition: 'is-bottom-left',
  defaultNotificationDuration: 3000,
  defaultNotificationPosition: 'is-top-right',
  defaultTooltipType: 'is-info',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
