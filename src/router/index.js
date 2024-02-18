// Import Vue and Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomePage from '../components/Home/HomePage.vue';

// Define your routes
const routes = [
    { path: '/', component: HomePage, name:'home' },
    { path: '/gallery', component: HomePage, name:'gallery' },
    { path: '/about', component: HomePage, name:'about' },
    { path: '/contact', component: HomePage, name:'contact'},
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
