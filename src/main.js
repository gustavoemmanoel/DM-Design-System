import { createApp } from "vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "../src/common_dm/index.css";
import pt from 'element-plus/dist/locale/pt.mjs'

createApp(App).use(router).use(ElementPlus, {locale: pt,}).mount("#app");