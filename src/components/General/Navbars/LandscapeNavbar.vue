<template>
  <nav :class="navStyle">
    <ul :style="{ 'background-color': `rgba(94, 83, 67, ${navOpacity})` }">
      <li @click="clickLink('Home')"> 
        <a :style="{ color: linkColor }">Home</a>
      </li>
      <li @click="clickLink('Home')">
        <a :style="{ color: linkColor }">About</a>
      </li>
      <li @click="clickLink('Gallery')">
        <a :style="{ color: linkColor }">Gallery</a>
      </li>
      <li @click="clickLink('Contact')">
         <a :style="{ color: linkColor }">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import 'animate.css';

export default {
  name: 'NavbarBaby',
  data() {
    return {
      navOpacity: 0,
    };
  },
  computed: {
    linkColor() {
      // Calculate color based on navOpacity
      return this.navOpacity > 0.5 ? '#EFE9E4' : '#5E5343';
    }
  },
  mounted() {
    // Add event to window for scrolling
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    vhToPixel(value) {
      return (value * window.innerHeight) / 100;
    },
    handleScroll() {
      const distanceFromTop = window.scrollY || window.pageYOffset;
      this.navOpacity = distanceFromTop / this.vhToPixel(15);
    },
    clickLink(url){
      this.$emit('clicked', url);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

nav {
  font-family: 'Comfortaa', sans-serif;
  width: fit-content;
  position: fixed;
  right: 15%;
  z-index: 5;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  gap:1vw;
  min-width:fit-content;
  padding-right:2vw;
  width: 30vw;
}

li {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 30px;
  position: relative;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
  color: #5E5343;
  cursor:pointer;
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
