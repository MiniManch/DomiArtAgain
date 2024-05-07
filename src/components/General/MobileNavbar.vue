<template>
    <div class="containerOfAll" >
      <!-- Hamburger icon -->
      <div class="hamburger-icon" @click="toggleNavbar" v-if="!isOpen" @scroll="Handlescroll">
        <img src="../../../public/images/icons/menu/menu.png" alt="Menu">
      </div>
  
      <!-- Navbar -->
      <nav :class="{ 'navbar-open': isOpen }">
        <ul >
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
      Handlescroll(){
        console.log('scroll')
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

  .containerOfAll{
    position: fixed !important;
    top:0;
    left:1vh;
    overflow: hidden;
    z-index: 1000;
  }

  .hamburger-icon {
    cursor: pointer;
    margin-top: 20px;
  }

  img{
    width:30px;
  }
  
nav {
  font-family: 'Comfortaa', sans-serif;
  padding-top: 20px;
  width: fit-content;
  animation-duration: 0.5s;
  padding-top: 0;
  overflow-y: hidden;
}

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
  