import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import LoginPage from '../components/Admin/LoginPage.vue';
import AdminDashboard from '../components/Admin/AdminDashboard.vue';
import AdminImageGallery from '../components/Admin/AdminImageGallery.vue';
import AdminEditPainting from '../components/Admin/AdminEditPainting.vue';
import NewPainting from '../components/Admin/NewPainting.vue';



const routes = [
    { path: '/', component: Home, name: 'home',alias:'/home' },
    { path: '/about', component: Home, name: 'about' },
    { path: '/contact', component: Home, name: 'contact' },
    { path: '/gallery', component: Home, name: 'gallery' },
    { path: '/admin', component: AdminDashboard, name: 'dashboard' },
    { path: '/admin/login', component: LoginPage, name: 'Login' },
    { path: '/admin/images', component: AdminImageGallery, name: 'AdminImages' },
    { path: '/admin/image/:id', component: AdminEditPainting, name: 'editImage' },
    { path: '/admin/new-image', component: NewPainting, name: 'newImage' },
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