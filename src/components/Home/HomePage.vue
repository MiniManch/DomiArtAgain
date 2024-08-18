<template>
  <div id='Home' class="home-container">
    <div class="left-side">
      <img src="https://res.cloudinary.com/dfvncr99h/image/upload/v1722009581/Grid_no_bg-min_fl76ea.png" alt="">
    </div>

    <div class="right-side">
      
      <div class="content">
        <h1 class="title"> <span>Dominique</span> <br> Lopez Rokah</h1>
        <h2 class="artist">Artist</h2>
        <p class="text">Creating abstract beauty, that invites viewers to a journey, through a world of colors and shapes, one brush stroke at a time </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

@media screen and (max-width: 600px) {
  .home-container{
    position: relative;
    display:flex;
    flex-direction: column-reverse;
    width:100%;
    padding-bottom: 5vh;
  }
  .left-side{
    width:100%;
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
  }
  .content{
    display:flex;
    flex-direction:column;
    align-items: center;
  }
  .title {
    font-size: 6vh;
  }
  img{
    height:40vh;
  }
  .text{
    width:80%;
  }
}

@media screen and (min-width: 601px) and (max-width: 900px) {

  
}

@media screen and (orientation: landscape) {
  
.home-container{
  display:flex;
  justify-content: space-between;
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