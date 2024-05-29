<template>
  <nav :class="navStyle">
    <ul :style="{ 'background-color': `rgba(94, 83, 67, ${navOpacity})` }" >
      <li @click="determineLink('home')"><a :href="homeLink" :style="{ color: linkColor }">Home</a></li>
      <li><router-link :to="{ name: 'about' }" :style="{ color: linkColor }">About</router-link></li>
      <li @click="determineLink('gallery')"><a :href="galleryLink" :style="{ color: linkColor }">Gallery</a></li>
      <li @click="determineLink('contact')"><a :href="contactLink" :style="{ color: linkColor }">Contact</a></li>
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
      homeLink: '/home',
      galleryLink: '/home',
      contactLink: '/home'
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

    // Check if screen is landscape
    this.isLandscape = window.matchMedia("(orientation: landscape)").matches;
    // Set default styles based on mount
    this.navStyle = this.isLandscape ? 'landscape' : 'smallScreen';
    this.isOpen = !this.isLandscape;

    // Listen for orientation change
    window.addEventListener("orientationchange", this.handleOrientationChange);

    this.determineLink('home');
    this.determineLink('gallery');
    this.determineLink('contact');
  },
  methods: {
    vhToPixel(value) {
      return (value * window.innerHeight) / 100;
    },
    handleScroll() {
      const distanceFromTop = window.scrollY || window.pageYOffset;
      this.navOpacity = distanceFromTop / this.vhToPixel(15);
    },
    determineLink(link){
      const urlString = window.location.href;
      const urlStringLast4Chars = urlString.substring(urlString.length - 4);
      const urlStringLastChar = urlString.charAt(urlString.length - 1);
      let AlreadyNavigated = urlString.indexOf('#') != -1;

      console.log(urlStringLast4Chars);
      console.log(urlStringLastChar);
      console.log(AlreadyNavigated);

      if(urlStringLast4Chars === 'home' || urlStringLastChar === '/' || AlreadyNavigated){
        if (link === 'gallery'){
          this.galleryLink = '#Gallery';
          return;
        }
        if(link === 'contact'){
          this.contactLink = '#Contact';
          return;
        }
        if(link === 'home'){
          this.homeLink =  '#Home';
          return;
        }
      }
      else{
        this.homeLink = this.galleryLink = this.contactLink = '/home';
        this.$emit('directTo',link);
      }
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
