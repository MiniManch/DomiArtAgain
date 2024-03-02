<template>
  <nav v-if="displayComponent" :class="['animate__animated',animation,'navbarStyle']">
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
  name: 'MainNavbar',
  mounted() {
  // Add event listener for scroll event when the component is mounted
      window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
      // Remove event listener when the component is destroyed to prevent memory leaks
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const distanceFromTop = window.scrollY || window.pageYOffset;

      const vhToPixel = value => (value * window.innerHeight) / 100;
      // Now you can use these values as thresholds
      if (vhToPixel(40) < distanceFromTop){
        this.displayComponent = true;
        this.animation = 'animate__fadeIn';
      }
      if (vhToPixel(40) > distanceFromTop){
        this.animation = 'animate__fadeOut';
      }
    }
  },
  data(){
    return {
      animation: null,
      displayComponent: false
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
  position: fixed;
  
  animation-duration: 0.5s;
}

.navbarStyle{
  position:absolute;
  left:30vw;
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
</style>
