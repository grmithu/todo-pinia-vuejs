// import './assets/main.css'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL="https://localhost:8000"



const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
app.mount('#app')
