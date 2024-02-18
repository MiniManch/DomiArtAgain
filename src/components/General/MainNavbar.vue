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
  export default {
    name: 'MainNavbar',
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
  
  nav {
    font-family: 'Comfortaa', sans-serif;
    padding-top:20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 30px; /* Adjust as needed */
    font-size: 40px;
  }
  
  a {
    text-decoration: none;
    transition: color 0.3s ease; 
    color:#5E5343;

  }
  
  a:hover {
  }
  </style>
  