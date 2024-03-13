<template>
    <div class="overlay">
        <div class="container">
            <img src="" alt="" class="image">
        </div>
        <div class="close " @click="closeModal">X</div>
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
    
.overlay{
    z-index: 2;
    width:100vw;
    height:100vh;
    background-color: black;
    opacity:0.6;
}

.close{color:white}
</style>