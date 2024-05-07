<template>
    <nav :class="navStyle">
        <div class="hamburger-icon" @click="toggleNavbar" v-if="!isOpen && !isLandscape">
            <img src="../../../public/images/icons/menu/menu.png" alt="Menu">
        </div>
        <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'gallery' }">Gallery</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
    </nav>
  </template>
  
<script>
import 'animate.css';

export default {
    name: 'NavbarBaby',
    data() {
        return {
            navStyle: null,
            isOpen:null,
            isLandscape : null
        }
    },
    mounted() {
        // Add event to window for scrolling
        window.addEventListener('scroll', this.handleScroll);

        // Check if screen is landscape
        this.isLandscape = window.matchMedia("(orientation: landscape)").matches;
        // Set default styles based on mount
        this.isLandscape ? this.navStyle = 'landing' : this.navStyle = 'smallScreen'
        this.isLandscape ? this.isOpen = false : this.isOpen = true;
        
        // Listen for orientation change
        window.addEventListener("orientationchange", () => {
        this.isLandscape = window.matchMedia("(orientation: landscape)").matches;
        });
    },
    methods: {
        vhToPixel(value) {
            return (value * window.innerHeight) / 100;
        },
        handleScroll() {
            const distanceFromTop = window.scrollY || window.pageYOffset;
            if (this.vhToPixel(7) < distanceFromTop) {
                this.navStyle = 'smallScreen'
            }
            if (this.vhToPixel(7) > distanceFromTop) {
                this.navStyle = 'landscape'
            }
        }
    },
}

</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

.landscape {
    font-family: 'Comfortaa', sans-serif;
    padding-top: 20px;
    width: fit-content;
    position: fixed;

    right:15%;

    z-index: 5;
}

.landscape > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    display: inline-block;
    margin-right: 40px; 
    font-size: 30px;
    position: relative; 
}

a {
    text-decoration: none;
    transition: color 0.3s ease; 
    color: #5E5343;
}

a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #5E5343;
    transition: width .4s;
}

a:hover::after {
    width: 100%;
    left: 50%; 
}

.hamburger-icon{
    width:50px;
}

.hamburger-icon > img{
    width:100%;
}
</style>
