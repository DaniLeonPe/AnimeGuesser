import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Importa TailwindCSS
import vuetify from './plugins/vuetify' // Importa Vuetify

createApp(App).use(vuetify).mount('#app')
