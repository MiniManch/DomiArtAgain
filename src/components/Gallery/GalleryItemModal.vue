<template>
    <div class="overlay">
        <div class="container">
            <img :src="data.link_2" alt="" class="image">
        </div>
        <div class="close " @click="closeModal">
            <img src="../../../public/images/icons/close/150.png" alt="cancel"/>
        </div>
    </div>
</template>

<script>
import 'animate.css';

export default {
    name: 'GalleryItemModal',
    props: {
        func: Function,
        data: Object
    },
    methods:{
        closeModal(){
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.overlay {
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgb(94, 83, 67,0.8);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center; /* Center the image vertically */
    height: 100%; /* Ensure the container takes up the full height of its parent */
}

.image {
    max-width: 100%;
    max-height: 100%;
    min-width: 35vw;
}

.close{
    position: absolute;
    top:5vh;
    right:5vw;
    cursor: pointer; 
}
</style>
