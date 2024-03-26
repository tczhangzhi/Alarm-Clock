import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$mitt = mitt();

app.use(ElementPlus)
app.mount('#app')