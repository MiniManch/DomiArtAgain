<template>
    <GalleryItemModal v-if="this.displayModal" @close="openOtherImage" :data="this.itemData" :isMobileSrc="true"/>
    <div v-if="this.itemData" class="total-wrapper">
        <div :class="['image',this.itemData.aspect]">
            <img :src="this.itemData.link_1" alt="" :class="[this.itemData.aspect]">
        </div>
        <div class="info">
            <h1 class="title">{{ this.itemData.title }}</h1>
            <h3 class="year">{{ this.itemData.year }}</h3>
            <h2 class="text">{{ this.itemData.text }}</h2>

            <img :src="this.itemData.link_2" alt="" class="other_image" @click="openOtherImage()" >
        </div>
    </div>
</template>
<script>
import 'animate.css';
import GalleryItemModal from './GalleryItemModal.vue';

export default {
  name: 'GalleryItem',
  components:{
    GalleryItemModal
  },
  data() {
    return {
      itemId: null,
      itemData: null,
      displayModal:false
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
    },
    openOtherImage(){
      this.displayModal = !this.displayModal;
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.total-wrapper{
  width:90vw;
  height:100vh;

  margin: 0 auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  gap: 2vw;

  overflow-y: hidden;
  overflow-x: hidden;
}

.image{
  width:100%;
  height:100%;

  display:inline-block;
}

.square{
    width:100%;
    height:80%;
}

.vertical{
  height:60vh;
  margin-top: 5vh;
}

.image.vertical{
  height:fit-content;
}
.horizontal{
  width:100%;
  height:fit-content;
}

.info{
  height:40%;

  font-family: "Playfair Display", serif;
  color:#5E5343;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom:10vh;
}

.text{
  font-weight: 200;
  font-size: 0.8em;
}

.image > img{
  max-height:90%;
  margin-top:5%;
}

img.horizontal{
  width:100%;
}

.image.horizontal{
  margin-top: 10vh;
}

.other_image{
  width:10vh;
  height:10vh;

  align-self: center;

  margin-top: 2vh;
  opacity: 0.6;
  
  transition: all 0.5s;
  cursor: pointer; 

}

.other_image:hover{
  opacity:1;
}
</style>