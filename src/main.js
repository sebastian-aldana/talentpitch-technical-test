import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router.js'
import store from './store'
import './input.css'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')


