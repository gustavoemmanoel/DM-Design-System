import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import './index.css'

createApp(App).use(ElementPlus).use(router).mount('#app')

/* app.use(ElementPlus)
app.mount('#app')

const app = createApp(App) */