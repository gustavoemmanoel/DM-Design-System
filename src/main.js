import { createApp } from "vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "../src/Estilos_dm/index.css";

createApp(App).use(ElementPlus).use(router).mount("#app");