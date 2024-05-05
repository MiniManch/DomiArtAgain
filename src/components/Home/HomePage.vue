<template>
  <div class="home-container">
    <div class="left-side">
      <img src="../../../public/images/artistic/looking2.jpg" alt="">
    </div>

    <div class="right-side">
      <component :is="navbarComponent" />
      
      <div class="content">
        <h1 class="title"> <span>Dominique</span> <br> Rokah Lopez</h1>
        <h2 class="artist">Artist</h2>
        <p class="text">I'm baby blackbird spyplane synth ascot celiac whatever. Pinterest yuccie single-origin coffee leggings iPhone blue bottle sartorial iceland cloud bread thundercats unicorn offal grailed butcher kale chips. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    navbarComponent: {
      type: Object,
      required: true
    }
  }
};
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

@media screen and (max-width: 600px) {
  .home-container{
    display:flex;
    flex-direction: column-reverse;
    width: calc(100% - 10vh); /* Margin from both sides */
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
    width:100%;

    display:flex;
    flex-direction: column;

    margin-left: 8vw;
    margin-right: 5vw;
  }
  .title {
    font-size: 6vh;
    /* margin-top: 7vh; */
    /* margin-bottom:0;

    font-weight:400;
    width:fit-content;
    padding-left: 0;
    text-align: start; */
  }
}

@media screen and (min-width: 601px) and (max-width: 900px) {
  /* CSS rules here will apply when the screen width is between 601px and 900px */
}

@media screen and (orientation: landscape) {
  
.home-container{
  display:flex;
  justify-content: space-between;
  width: calc(100% - 10vh); /* Margin from both sides */
  height:100vh;
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
  margin-top: 7vh;

  font-weight:400;
  width:fit-content;
  padding-left: 0;
  text-align: start;
}

.title > span{
  margin-left:0;
}

img{
  --aspect-ratio-width: 795.4;
  --aspect-ratio-height: 763.3;

  width: 45vw; 
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

}

</style>
