<template>
    <div class="modalContainer">
      <p @click="funcs.close()" class="close"> X </p>
        <div class="modal-content">
            <div class="image">

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
  background-color: white;
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  gap:2vw;
}

.image{
  width:50%;
  height:100%;
  margin-left: 5vw;
  background-color: red;
}

.content{
    background-color: blue;
    height:100%;
    width: 30%;

}
</style>

