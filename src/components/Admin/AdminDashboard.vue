<template>
    <div v-if="authorized" class="containerOfAll">
        <div class="containerOfButtons">
            <button class="btn" @click="goTo('/admin/images')">View All Paintings</button>
            <button class="btn" @click="goTo('/admin/new-image')">Create a New Painting</button>
            <button class="btn">Log Out</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            authorized:false,
        }
    },
    mounted(){
        this.checkToken();
    },
    methods:{
        goTo(url){
            this.checkToken()
            this.$router.push(url)
        },
        checkToken(){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/check-token`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
            }
            })
            .then(response => {
            console.log(response);
            this.authorized = true;
            })
            .catch(error => {
                if(error.response.request.status === 401){
                    localStorage.setItem('DomiArt_token',null);
                    this.$router.push('/admin/login');
                }
            console.error('Error updating field:', error);
            });
        }
    }
}
</script>
<style scoped>
    .containerOfAll{
        font-family: "Comfortaa";
        height:100vh;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .containerOfButtons{
        display: flex;
        flex-direction: column;
        gap:2vw;
        
        background-color: #5e5343;
        padding:3vw;

        border-radius:10%;
    }

    button{
        background-color: white;
        color:#5e5343;
    }

    button:hover{
        color:#EFE9E4;
    }
</style>