import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from './components/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')