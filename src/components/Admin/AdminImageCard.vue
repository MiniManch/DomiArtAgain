<template>
    <div class="container" style="margin-top:50px;">
        <div class="card">
        <div class="card-image">
            <img :src="item.link_1" alt="Image" />
        </div>

        <div class="card-heading">
            {{ item.title }}
        </div>
        <button class="card-button" @click="editItem(item.id)"> Edit</button>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'GalleryCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data(){
      return{
        authorized:false,
      }
    },   
    methods: {
      editItem(id) {
        this.checkToken();
        this.$router.push(`/admin/image/${id}`);
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
  };
  </script>
  
  <style scoped>
  *{
    font-family: "Comfortaa";
  }
  .card-image img {
    width:10vw;
    height:20vh;
    border-radius: 8px 8px 0px 0;
  }
  
  .card-heading {
    font-size: 18px;
    font-weight: bold;
    padding: 10px 15px;
    color:#5e5343;
  }
  
  .card-button {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    background-color: #5e5343;
    color: #EFE9E4;
    border-radius: 0 0 8px 8px;
    border:none;
  }
  
  .card-button:hover {
    text-decoration: none;
    background-color: #EFE9E4;
    color: #5e5343;
    border:none;
  }
  </style>
  