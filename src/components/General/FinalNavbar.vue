<template>
    <nav :class="navStyle">
      <div class="hamburger-icon" @click="toggleNavbar" v-if="!isOpen && !isLandscape">
        <img src="../../../public/images/icons/menu/menu.png" alt="Menu">
      </div>
      <ul :style="{ 'background-color': `rgba(94, 83, 67, ${navOpacity})` }">
        <li><router-link :to="{ name: 'home' }" :style="{ color: linkColor }">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }" :style="{ color: linkColor }">About</router-link></li>
        <li><router-link :to="{ name: 'gallery' }" :style="{ color: linkColor }">Gallery</router-link></li>
        <li><router-link :to="{ name: 'contact' }" :style="{ color: linkColor }">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  <!-- if navstyle is smallscreen, then hamburger placement, plus clicking it, plus menu opening from the side with animation.  -->
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
        if (this.vhToPixel(7) < distanceFromTop) {
          // this.navStyle = 'smallScreen'
        }
        if (this.vhToPixel(7) > distanceFromTop) {
          this.navStyle = 'landscape'
        }
      },
      openMobileNavbar(){
        this.isOpen = !this.isOpen;
      }
    },
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
  nav {
    font-family: 'Comfortaa', sans-serif;
    width: fit-content;
  }
  .landscape {
    position: fixed;
    right: 15%;
    z-index: 5;
  }
  .landscape > ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width:30vw;
  }
  .smallScreen >
  ul {
    padding: 0;
    margin: 0;
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
  .hamburger-icon {
    width: 50px;
  }
  .hamburger-icon > img {
    width: 100%;
  }
  </style>
  