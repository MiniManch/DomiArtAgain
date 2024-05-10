<template>
    <nav>
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
        name: 'GalleryItemNavbar',
        data(){
            return {
            animation: null,
            navbarStyle : null,
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
    
    animation-duration: 0.5s;

    position:absolute;
    top:0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 40px; /* Adjust as needed */
    font-size: 30px;
    position: relative; /* Position relative for absolute positioning */
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
  