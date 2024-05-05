<template>
    <div>
      <!-- Hamburger icon -->
      <div class="hamburger-icon" @click="toggleNavbar" v-if="!isOpen">
        <img src="../../../public/images/icons/menu/menu.png" alt="Menu">
      </div>
  
      <!-- Navbar -->
      <nav :class="{ 'navbar-open': isOpen }">
        <ul>
          <li @click="toggleNavbar">X</li>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
          <li><router-link :to="{ name: 'gallery' }">Gallery</router-link></li>
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import 'animate.css';
  
  export default {
    name: 'MainNavbar',
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleNavbar() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
  
  /* Hamburger icon styles */
  .hamburger-icon {
    cursor: pointer;
    margin-top: 20px;
    position: fixed;
    top:0;
    left:2vh;
  }

  img{
    width:30px;
  }
  
/* Navbar styles */
nav {
  font-family: 'Comfortaa', sans-serif;
  padding-top: 20px;
  width: fit-content;
  position: fixed;
  animation-duration: 0.5s;
  padding-top: 0;
  top: 0;
  left: 0; /* Adjust this value to control the distance from the left edge */
}

/* Updated styles for vertical navbar */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Set to column for vertical orientation */
  background-color: #EFE9E4;
}

li {
  font-size: 1.5em;
  position: relative; /* Position relative for absolute positioning */
  padding:1vh;
}

li:first-child{
    width: fit-content;
    margin-left: 2vh;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
  color: #5E5343;
}

a::after {
  margin-top: 10px;
  width: 0;
  height: 2px;
  background: #5E5343;
  transition: width .4s;
}

a:hover::after {
  width: 100%;
  left: 50%;
}

nav {
  display: none;
}

.navbar-open {
  display: block;
}

  </style>
  