<template>
    <div class="containerOfAll">
      <div class="imageContainer">
        <div v-for="item in images" :key="item.id">
          <AdminImageCard :item="item" />
        </div>
      </div>
    </div>
</template>
<script>
import AdminImageCard from "./AdminImageCard.vue";
import axios from 'axios';

export default {
    data(){
        return{
            images:null,
        }
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        fetchData() {
        axios.get('/api/images')
            .then(response => {
                this.images = response.data;
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
        },
    },
    components:{
        AdminImageCard,
    }
}

</script>
<style scoped>
    .containerOfAll{
        min-height: 100vh;
        min-width:100vw;
        background-color: #EFE9E4;
    }

    .imageContainer{
        display:flex;
        justify-content: center;
        flex-wrap:wrap;
        padding-top:5vh;
        padding-bottom:5vh;
    }
</style>