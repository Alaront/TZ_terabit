import { createApp } from 'vue'
import './reset.sass'
import App from './App.vue'
import router from "./router.js";

const app = createApp(App)

app.use(router)

router.isReady().then(() => app.mount('#app'))
