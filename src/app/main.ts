import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerPlugins } from './plugins'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
registerPlugins(app)

app.mount('#app')
