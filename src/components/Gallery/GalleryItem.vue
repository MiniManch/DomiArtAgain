<template>
    <div class="total-wrapper">
        <div class="image"></div>
        <div class="info"></div>
    </div>
</template>

<script>
import 'animate.css';
import {getItemData} from '../../utils/utilFuncs.js'

export default {
    name: 'GalleryItem',
    data(){
        return {
            itemId: null,
            itemData: null // Initialize itemData to store the data of the matched item
        }
    },
    mounted(){
        this.itemId = this.$router.currentRoute._rawValue.params.id;
        this.itemData = getItemData('/data/GalleryImages.json',this.itemId);
        },
    // methods:{
       
    // }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

.total-wrapper{
    width:100vw;
    height:100vh;

    display:flex;
    flex-direction:row;
    justify-content: center;
}

.image{
    width:60%;
    background-color: red;
}

.info{
    width:40%;
    background-color: yellow;
}
</style>
