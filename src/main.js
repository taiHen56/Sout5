import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as VeeValidate from 'vee-validate';
import './assets/main.css'

import { initFlowbite } from 'flowbite'
import * as yup from "yup";
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App)
    .use(router)
    .use(store)
    .use(yup)
    .use(VeeValidate)
    .use(initFlowbite)
    .mount('#app')
