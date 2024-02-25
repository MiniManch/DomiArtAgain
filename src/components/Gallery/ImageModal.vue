<template>
    <div class="modalContainer">
      <p @click.prevent="funcs.close()" class="close"> X </p>
        <div class="modal-content">
            <div class="image-container">
              <div class="other-images-container">
                <img :src="this.data.link_1" alt=""  class="other-image" @mouseenter="hoverOtherImage(this.data.link_1)">
                <img :src="this.data.link_2" alt="" class="other-image" @mouseenter="hoverOtherImage(this.data.link_2)">
              </div>

              <div :class="['image']">
                <img :src="selectedImage" alt="" :class="selectedImage == this.data.link_1 ? this.data.aspect : 'decor'">
              </div>
            </div>

            <div class="content">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      data:{ type : Object},
      funcs:{ type : Object}
  },
  
  data(){
    return{
      selectedImage:this.data.link_1,
    }
  },
  methods :{
    hoverOtherImage(item){
      this.selectedImage = item;
      console.log(this.selectedImage)
      console.log(item);
    }
  }

};
</script>

<style scoped>
.close {
  color: #fff;
  position: absolute;
  top: 15px;
  right: 35px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}
.modalContainer {
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  left:0;
  top:0;
  width:100vw;
  height:100vh;
  overflow: auto;
  background-color: rgba(0,0,0,0.6);
}
.modal-content{ 
  width:70%;
  height:80%;
  background-color: #EFE9E4;
  display: flex;
  flex-direction: row ;
  gap:2vw;
}

.image-container{
  width:70%;
  height:100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: red;
}

.other-images-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vh;
  
  margin-right: 2vw;
  margin-left:1vw;
}
.image {
  margin-top: 5vh;
  justify-self: center;
  width:38vw;

}

.square{
  width:32vw;
  margin-left:2vw;
}

.vertical{
  width:20vw;
}

.horizontal{
  width:38vw;
  margin-top: 8vh;
}
.decor{
  width:27vw;
}

.other-image{
  width:5vw;
  height:5vw;

  opacity: 0.9;
  transition: all 0.5s;
}

.other-image:hover{
  opacity: 1.1;
  width:6vw;
  height:6vw;
}

.content{
    background-color: blue;
    height:100%;
    width: 30%;
}
</style>

