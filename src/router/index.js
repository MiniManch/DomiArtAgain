import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import GalleryItem from '../components/Gallery/GalleryItemLandscape.vue'; // Assuming you have a component for painting details
import GalleryItemMobile from '../components/Gallery/GalleryItemMobile.vue';

const routes = [
    { path: '/', component: Home,name: 'home'},
    { path: '/about', component: Home,name: 'about'},
    { path: '/contact', component: Home,name: 'contact'},
    { path: '/gallery', component: Home,name: 'gallery'},
    { path: '/painting/:id', component: determineGalleryItemComponent, name: 'painting-detail' } 
];

function determineGalleryItemComponent() {
    const isMobile = window.innerWidth < 768; // Example breakpoint for mobile view
    
    // Return appropriate component
    return isMobile ? GalleryItemMobile : GalleryItem;
}

const router = createRouter({
    history: createWebHistory(),
    routes
});

console.log(Home)

export default router;
