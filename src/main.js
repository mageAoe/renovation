import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './normalize.css'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/font_icon/iconfont.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
