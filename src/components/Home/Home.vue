<template>
  <div>
    <HomePage />

    <!-- Gallery -->
    <LandscapeGallery :data="data" v-if="isLandscape" />
    <MobileGallery :data="data" v-if="!isLandscape && this.data.length > 0" />

    <!-- Contact -->
    <LandscapeContactPage v-if="isLandscape" />
    <MobileGalleryContactPage v-else />
  </div>
</template>

<script>
import axios from 'axios';
import LandscapeGallery from "../Gallery/LandscapeGalleryComponent.vue";
import MobileGallery from "../Gallery/MobileGallery.vue";
import HomePage from "./HomePage.vue";
import LandscapeContactPage from "../Contact/LandscapeContactPage.vue";
import MobileGalleryContactPage from "../Contact/MobileContactPage.vue";

export default {
  name: 'App',
  data() {
    return {
      data: [],
      isMobile: false,
      isLandscape: false,
    };
  },

  components: {
    LandscapeGallery,
    MobileGallery,
    HomePage,
    LandscapeContactPage,
    MobileGalleryContactPage,
  },
  
  async mounted() {
    // Fetch data from the backend
    await this.fetchData();
    // Detect screen size and orientation
    this.detectScreen();
    // Add event listener to detect orientation change
    window.addEventListener('orientationchange', this.detectScreen);
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/images`);
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    
    detectScreen() {
      // Check if the viewport width is less than a certain threshold to determine mobile
      this.isMobile = window.innerWidth < 768;
      // Check if the aspect ratio indicates landscape orientation
      this.isLandscape = window.innerWidth > window.innerHeight;
    },
  },
};

</script>

<style>
@media screen and (max-width: 600px) {
  html, body {
    overflow-x: hidden;
  }
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EFE9E4;
  width: 100%;
  height: 100%;
}

div {
  position: relative;
}
</style>
