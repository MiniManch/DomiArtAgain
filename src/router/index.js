import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import LoginPage from '../components/Admin/LoginPage.vue';

const routes = [
    { path: '/', component: Home, name: 'home',alias:'/home' },
    { path: '/about', component: Home, name: 'about' },
    { path: '/contact', component: Home, name: 'contact' },
    { path: '/gallery', component: Home, name: 'gallery' },
    { path: '/admin/Login', component: LoginPage, name: 'Login' },
    { path: '/painting/:id', component: () => determineGalleryItemComponent(), name: 'painting-detail' }
];

function determineGalleryItemComponent() {
    const isMobile = window.innerWidth < 768;

    // Dynamic import
    return isMobile
        ? import('../components/Gallery/GalleryItemMobile.vue')
        : import('../components/Gallery/GalleryItemLandscape.vue');
}

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;