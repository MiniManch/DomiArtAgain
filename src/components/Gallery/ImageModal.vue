<template>
    <div class="modalContainer">
      <p @click="funcs.close()" class="close"> X </p>
        <div class="modal-content">
            <div class="image-container">
              <div class="other-images-container">
                <img :src="this.data.link_1" alt=""  class="other-image">
                <img :src="this.data.link_2" alt="" class="other-image">
              </div>

              <div class="image">
                <img :src="selectedImage" alt="" :class="this.data.aspect">
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
  justify-content: space-between;
  gap:2vw;
}

.image-container{
  width:70%;
  height:100%;

  margin-left: 2vw;
  background-color: red;

  display: flex;
  flex-direction: row;
}

.other-images-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vh;
  
  margin-right: 2vw;
}
.image {
  margin-top: 5vh;
}

.image > img {
  width:32vw;
}

.other-image{
  width:6vw;
  height:6vw;
  opacity: 0.9;
  transition: opacity 0.5s;
}

.other-image:hover{
  opacity: 1.1;
}

.content{
    background-color: blue;
    height:100%;
    width: 30%;
}
</style>

