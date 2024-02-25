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
    mounted() {
    // Add event listener for scroll event when the component is mounted
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // Remove event listener when the component is destroyed to prevent memory leaks
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        // Get the distance from the top that has been scrolled
        const distanceFromTop = window.scrollY || window.pageYOffset;
        
        // Now you can use this value as needed
        console.log('Distance scrolled from top:', distanceFromTop);
        
        // You can also call other functions or perform actions based on the scroll position
        // For example:
        // if (distanceFromTop > 100) {
        //   // Do something when scrolled more than 100 pixels from the top
        // }
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
    position: fixed;
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
  