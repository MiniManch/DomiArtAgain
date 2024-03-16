<template>
  <nav v-if="displayComponent" :class="['animate__animated',animation,'navbarStyle',fixedStyle]">
    <ul :class="[ulFixedStyle]">
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
  name: 'MainNavbar',
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    vhToPixel(value){
      return (value * window.innerHeight) / 100;
    },
    handleScroll() {
      const distanceFromTop = window.scrollY || window.pageYOffset;

      // Now you can use these values as thresholds
      if (this.vhToPixel(40) < distanceFromTop){
        this.displayComponent = true;
        this.animation = 'animate__fadeIn';
        this.fixedStyle = null;
        this.ulFixedStyle = null;

      }
      if (this.vhToPixel(90) < distanceFromTop){
          this.fixedStyle = 'fixedStyle';
          this.ulFixedStyle = 'ulFixedStyle';
      }

      if (this.vhToPixel(40) > distanceFromTop){
        this.animation = 'animate__fadeOut';
        this.fixedStyle = null;
      }
    }
  },
  data(){
    return {
      animation: null,
      displayComponent: false,
      fixedStyle:null,
      ulFixedStyle :null
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

nav {
  font-family: 'Comfortaa', sans-serif;
  padding-top: 20px;
  width: fit-content;
  position: absolute;
  
  animation-duration: 0.5s;
}

.navbarStyle{
  left:40vw;
  top:92vh;
}

ul {
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

.fixedStyle{
  position: fixed;
  left:0 !important;
  top:0vh;

  background-color: #EFE9E4;
}

.ulFixedStyle{
  width:100vw;


}
</style>
