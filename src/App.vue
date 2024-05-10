<template>
  <LandscapeNavbar v-if="isLandscape" />
  <MobileNavbar v-else />
  <router-view></router-view>
</template>

<script>
import LandscapeNavbar from "./components/General/Navbars/LandscapeNavbar.vue"
import MobileNavbar from "./components/General/Navbars/MobileNavbar.vue";

export default {
  name: 'App',
  data(){
    return{
      isMobile: false,
      isLandscape: false
    }
  },
  mounted() {
    // Detect screen size and orientation
    this.detectScreen();
    // Add event listener to detect orientation change
    window.addEventListener('orientationchange', this.detectScreen);
  },
  methods: {
    detectScreen() {
      // Check if the viewport width is less than a certain threshold to determine mobile
      this.isMobile = window.innerWidth < 768; 
      // Check if the aspect ratio indicates landscape orientation
      this.isLandscape = window.innerWidth > window.innerHeight;
    }
  },
  components:{
    LandscapeNavbar,
    MobileNavbar
  }
  
}
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
