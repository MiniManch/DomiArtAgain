<template>
    <GalleryItemModal v-if="this.displayModal" @close="openOtherImage" :data="this.itemData" :isMobileSrc="false"/>
    <LoadingModal v-if="isLoading" />
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
import LoadingModal from '../General/LoadingModal.vue';

export default {
  name: 'GalleryItem',
  components:{
    GalleryItemModal,
    LoadingModal,
  },
  data() {
    return {
      itemId: null,
      itemData: null,
      displayModal:false,
      isLoading: false,
    }
  },
  mounted() {
    this.itemId = this.$router.currentRoute._rawValue.params.id;
    this.getItemData(this.itemId);
    this.isLoading = true;
  },
  methods: {
    getItemData(id) {
      fetch(`${process.env.VUE_APP_BACKEND_URL}/image/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          this.itemData = data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error fetching item data:', error);
          this.isLoading = false;
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
  width:80vw;
  height:100vh;

  margin-left:10vw;

  display:flex;
  flex-direction:row;
  justify-content: center;

  gap: 2vw;

  overflow-y: hidden;
}

.image{
  width:60%;
  height:100%;
}

.square{
    width:80%;
    height:80%;
}
.vertical{
    height:100%;
}
.horizontal{
  width:80%;

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