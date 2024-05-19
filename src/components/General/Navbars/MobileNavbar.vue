<template>
  <nav class="navbar-fixed">
    <div :class="['hamburger-icon','animate__animated',hamburgerAnimation]" @click=" animating ? null : toggleNavbar('open')" v-if="!animating && !isOpen" @scroll="Handlescroll">
      <img src="../../../../public/images/icons/menu/menu.png" alt="Menu">
    </div>
    <ul :class="[isOpen ? 'navbar-open' : null, animating ? animation : null, 'animate__animated' ]" v-if="isOpen || animating" class="animated-navbar">
      <li @click="toggleNavbar('close')" class="closeButton">X</li>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><a href="#Gallery">Gallery</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
import 'animate.css';

export default {
  name: 'MobileNavbar',
  data() {
    return {
      isOpen: false,
      animating: false,
      animation: null,
      hamburgerAnimation: null,
    }
  },
  methods: {
    toggleNavbar(direction) {
      this.toggleAnimation(direction);
    },
    toggleAnimation(direction) {
      this.hamburgerAnimation = null;
      if (!this.animating) {
        this.animating = true;
        if (direction === 'open') {
          this.animation = 'animate__fadeInDown';
        } else if (direction === 'close') {
          this.animation = 'animate__fadeOutUp';
        }
        setTimeout(() => {
          this.isOpen = !this.isOpen;
          this.animating = false;
          this.animation = null;
        }, 800);
        this.hamburgerAnimation = 'animate__fadeIn';
      }
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

.navbar-fixed {
  position: fixed;
  z-index: 1000;
}
.hamburger-icon {
  position: relative;
  left: 1vh;
  top: 1vh;
}
.hamburger-icon > img {
  width: 40px;
}
ul {
  padding-left: 1vh;
  padding-right: 1vh;
  background-color: #5E5343;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
  display: flex;
  justify-content: flex-start;
}
li:last-child {
  padding-bottom: 1vh;
}
a {
  text-decoration: none;
  font-family: "Playfair Display", serif;
  color: #EFE9E4;
}
.closeButton {
  width: fit-content;
  color: #EFE9E4;
}
</style>
