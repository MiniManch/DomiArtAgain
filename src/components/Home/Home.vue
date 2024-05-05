<template>
  <div>
    <HomePage :navbarComponent="navbarComponent" />
    <Gallery :data="data"/>
    <Contact />
  </div>
</template>
  
<script>
import Gallery from "../Gallery/GalleryComponent.vue";
import HomePage from "./HomePage.vue";
import Contact from "../Contact/ContactPage.vue"
import MobileNavbar from '../General/MobileNavbar.vue'
import Navbar from '../General/HomeNavbar.vue'
  
import data from "../../../public/data/GalleryImages.json";
  
export default {
  name: 'App',
  data(){
    return{
      data: data,
      navbarComponent: null
    }
  },
  components: {
    Gallery,
    HomePage,
    Contact
  },
  mounted() {
    // Check if screen is landscape
    this.navbarComponent = this.isLandscape ? Navbar : MobileNavbar;
    // Listen for orientation change
    window.addEventListener("orientationchange", () => {
      this.navbarComponent = this.isLandscape ? Navbar : MobileNavbar;
    });
  },
  computed: {
    isLandscape() {
      return window.matchMedia("(orientation: landscape)").matches;
    }
  }
};
</script>

  
  <style>
  body{
    margin:0;
    padding:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100vh;
    overflow-x: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #EFE9E4;
    width:100%;
    height:100%;
  }
  </style>
  