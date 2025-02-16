import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import HomeView from './components/HomeView.vue';
import BlogView from './components/BlogView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/blog/', component: BlogView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log("Scrolling to ", to.hash, " from " , from.hash);
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

const app = createApp(App)
app.use(router)
app.mount('#app')