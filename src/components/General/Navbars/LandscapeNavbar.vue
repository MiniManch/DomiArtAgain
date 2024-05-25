<template>
    <nav :class="navStyle">
      <ul :style="{ 'background-color': `rgba(94, 83, 67, ${navOpacity})` }" v-if="navStyle === 'landscape' || (isOpen && !isLandscape)  ">
        <li><router-link :to="{ name: 'home' }" :style="{ color: linkColor }">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }" :style="{ color: linkColor }">About</router-link></li>
        <li><a href="#Gallery" :style="{ color: linkColor }">Gallery</a></li>
        <li><a href="#Contact" :style="{ color: linkColor }">Contact</a></li>
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
        navOpacity: 0,
        isOpen: null,
        isLandscape: null
      }
    },
    computed: {
      linkColor() {
        // Calculate color based on navOpacity
        const textColor = this.navOpacity > 0.5 ? '#EFE9E4' : '#5E5343';
        return textColor;
      }
    },
    mounted() {
      // Add event to window for scrolling
      window.addEventListener('scroll', this.handleScroll);
      console.log(window.scrollY)
  
      // Check if screen is landscape
      this.isLandscape = window.matchMedia("(orientation: landscape)").matches;
      // Set default styles based on mount
      this.isLandscape ? this.navStyle = 'landscape' : this.navStyle = 'smallScreen'
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
        this.navOpacity = distanceFromTop / this.vhToPixel(15);
        console.log(this.navOpacity);
      },
    },
  }
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
    width:30vw;
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
  