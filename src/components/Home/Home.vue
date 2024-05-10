<template>
  <div>
    <HomePage />
    <Gallery :data="data"/>
    <Contact />
  </div>
</template>
  
<script>
import Gallery from "../Gallery/GalleryComponent.vue";
import HomePage from "./HomePage.vue";
import Contact from "../Contact/ContactPage.vue"

import data from "../../../public/data/GalleryImages.json";
  
export default {
  name: 'App',
  data(){
    return{
      data: data,
    }
  },
  
  components: {
    Gallery,
    HomePage,
    Contact,
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  html, body {
    overflow-x:hidden;
  
  }
}

body{
  margin:0;
  padding:0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
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
div{
  position: relative;
}
</style>
