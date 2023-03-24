import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import './assets/main.css'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App).use(router).use(router)
    .use(router)
    .use(store)
    .mount('#app')
