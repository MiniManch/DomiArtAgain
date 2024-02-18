<template>
  <div class="home-container">
    <div class="left-side">
      <img src="../../../public/images/artistic/looking2.jpg" alt="">
    </div>

    <div class="right-side">
      <Navbar />
      <div class="content">
        <h1 class="title"> <span>Dominique</span> <br> Rokah Lopez</h1>
        <h2 class="artist">Artist</h2>
        <p class="text">I'm baby blackbird spyplane synth ascot celiac whatever. Pinterest yuccie single-origin coffee leggings iPhone blue bottle sartorial iceland cloud bread thundercats unicorn offal grailed butcher kale chips. </p>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../General/HomeNavbar.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {Navbar},
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

@font-face {
  font-family: 'MondayRain';
  src: url('../../../public/fonts/MondayRain.ttf') format('truetype');
}
.home-container{
  display:flex;
  justify-content: space-between;
  width: calc(100% - 10vh); /* Margin from both sides */
  height:100vh; /* Adjusted to full height */
}
.left-side{
  width:fit-content;
  height:fit-content;
  display:flex;
  justify-content: center;
  align-items: center;
}
.right-side{
  font-family: "Playfair Display", serif;
  text-align: center;
  color:#5E5343;
  width:60%;
  margin-left:8%;
  margin-right:5vh;
}

.title {
  font-size: 12vh;
  margin-bottom:0;

  font-weight:400;
  width:fit-content;
  padding-left: 0;
  text-align: start;
}

.title > span{
  margin-left:0;
}

img{
  --aspect-ratio-width: 795.4; /* Original width */
  --aspect-ratio-height: 763.3; /* Original height */

  width: 45vw; /* Set desired width in vw */
  height: calc((var(--aspect-ratio-height) / var(--aspect-ratio-width)) * 45vw); /* Calculate height based on aspect ratio */
}

.content{
  align-items: center;
}

.artist{
  margin-top:1%;
  margin-left:1%;

  width:fit-content;

  font-size: 2.6vh;
  font-family:"Comfortaa";
}

.text{
  margin-top:7%;
  width:70%;

  font-size:2vh;
  font-family:"Comfortaa";
  text-align: start;
}

</style>
