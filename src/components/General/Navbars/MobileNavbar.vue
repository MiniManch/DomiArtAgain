<template>
      <nav class="navbar-fixed">
        <div class="hamburger-icon" @click="toggleNavbar" v-if="!isOpen" @scroll="Handlescroll">
          <img src="../../../../public/images/icons/menu/menu.png" alt="Menu">
        </div>
        <ul :class="{ 'navbar-open': isOpen }" v-if="isOpen">
          <li @click="toggleNavbar">X</li>
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
    name: 'MobileNavbar',
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleNavbar() {
        this.isOpen = !this.isOpen;
      },
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
  
  .navbar-fixed {
    position: fixed;
    top: 1vh;
    left: 1vh;
    z-index: 1000;
  }

  .hamburger-icon > img {
    width:40px;
  }
  </style>
  