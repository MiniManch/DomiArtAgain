<template>
  <LandscapeNavbar v-if="isLandscape" @clicked="directToPage" />
  <MobileNavbar v-else />
  <router-view></router-view>
  <LandscapeFooter  />
</template>

<script>
import LandscapeNavbar from "./components/General/Navbars/LandscapeNavbar.vue"
import MobileNavbar from "./components/General/Navbars/MobileNavbar.vue";
import LandscapeFooter from "./components/General/Footer/LandscapeFooter.vue";

export default {
  name: 'App',
  data(){
    return{
      isMobile: false,
      isLandscape: false
    }
  },
  mounted() {
    this.detectScreen();
    window.addEventListener('orientationchange', this.detectScreen);
  },
  methods: {
    detectScreen() {
      this.isMobile = window.innerWidth < 768; 
      this.isLandscape = window.innerWidth > window.innerHeight;
    },
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'  
        });
      }
    },
    directToPage(url) {
      const currentLocation = window.location.pathname;

      if (currentLocation === '/') {
        this.scrollToSection(url);
      } else {
        this.$router.push('/');
        this.$nextTick(() => {
          this.scrollToSection(url);
        });
      }
    },
    capitalizeFirst(str) {
      if (str.length === 0) return str; 
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  },
  components:{
    LandscapeNavbar,
    MobileNavbar,
    LandscapeFooter
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
  user-select:none;
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
