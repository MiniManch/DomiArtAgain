<template>
  <div v-if="this.itemData" class="total-wrapper">
      <div class="image">
        <img :src="this.itemData.link_1" alt="" :class="[this.itemData.aspect]">
      </div>
      <div class="info">
        <NavBar />
        <h1 class="title">{{ this.itemData.title }}</h1>
        <h3 class="year">{{ this.itemData.year }}</h3>
        <h2 class="text">{{ this.itemData.text }}</h2>
      </div>
  </div>
</template>
<script>
import 'animate.css';
import NavBar from '../General/MainNavbar.vue';
export default {
  name: 'GalleryItem',
  components:{
    NavBar,
  },
  data() {
    return {
      itemId: null,
      itemData: null
    }
  },
  mounted() {
    this.itemId = this.$router.currentRoute._rawValue.params.id;
    this.getItemData('/data/GalleryImages.json', this.itemId); 
  },
  methods: {
    getItemData(url, id) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const item = json.find(item => item.id == id);
          if (item) {
            this.itemData = item; 
          } else {
            console.error(`Item with ID ${this.itemId} not found.`);
          }
        })
        .catch((error) => {
          console.error('Error fetching GalleryImages.json:', error);
        });
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.total-wrapper{
  width:80vw;
  height:100vh;

  margin-left:10vw;

  display:flex;
  flex-direction:row;
  justify-content: center;
}

.image{
  width:60%;
  height:100%;
}

.info{
  width:40%;
  height:100%;

  font-family: "Playfair Display", serif;
  color:#5E5343;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom:10vh;
}

.text{
  font-weight: 200;
  font-size: 1.2em;
}

.image > img{
  max-height:90%;
  margin-top:5%;
}
</style>