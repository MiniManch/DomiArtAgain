import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import GalleryItem from '../components/Gallery/GalleryItem.vue'; // Assuming you have a component for painting details

const routes = [
    { path: '/', component: Home,name: 'home'},
    { path: '/about', component: Home,name: 'about'},
    { path: '/contact', component: Home,name: 'contact'},
    { path: '/gallery', component: Home,name: 'gallery'},
    { path: '/painting/:id', component: GalleryItem, name: 'painting-detail' } 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

console.log(Home)

export default router;
