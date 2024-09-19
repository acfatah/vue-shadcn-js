import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'

document.title = 'Vue + Vite'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
