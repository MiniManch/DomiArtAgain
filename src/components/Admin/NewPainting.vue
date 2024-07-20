<template>
    <div class="containerOfAll">
      <div class="edit-form-container">
        <h2>Create New Painting</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="painting.title" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="year">Year</label>
            <input type="text" id="year" v-model="painting.year" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="text">Description</label>
            <textarea id="text" v-model="painting.text" class="form-control" required></textarea>
          </div>
          <div class="form-group">
            <label for="link_1">Primary Image</label>
            <input type="file" id="link_1" @change="onFileChange($event, 'link_1')" class="form-control-file" required />
          </div>
          <div class="form-group">
            <label for="link_2">Secondary Image</label>
            <input type="file" id="link_2" @change="onFileChange($event, 'link_2')" class="form-control-file" required />
          </div>
          <button type="submit" class="btn btn-primary">Create Painting</button>
          <button type="button" class="btn btn-warning" @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CreatePaintingForm',
    data() {
      return {
        painting: {
          title: '',
          year: '',
          text: ''
        },
        selectedFiles: {
          link_1: null,
          link_2: null
        }
      };
    },
    methods: {
      async checkToken() {
        try {
          await axios.get('/api/check-token', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
            }
          });
          return true;
        } catch (error) {
          if (error.response && error.response.status === 401) {
            localStorage.setItem('DomiArt_token', null);
            this.$router.push('/admin/login');
          }
          console.error('Error checking token:', error);
          return false;
        }
      },
      onFileChange(event, field) {
        this.selectedFiles[field] = event.target.files[0];
      },
      async uploadFile(paintingID, field) {
        const file = this.selectedFiles[field];
        if (!file) return;
  
        const formData = new FormData();
        formData.append('file', file);
  
        try {
          const response = await axios.put(`/api/image/${paintingID}/${field}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
            }
          });
          this.painting[field] = response.data[field];
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      },
      async submitForm() {
        try {
          const formData = new FormData();
          formData.append('title', this.painting.title);
          formData.append('year', this.painting.year);
          formData.append('text', this.painting.text);
          formData.append('link_1', this.selectedFiles.link_1);
          formData.append('link_2', this.selectedFiles.link_2);
  
          await axios.post('/api/image', formData, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
            }
          });
        } catch (error) {
          console.error('Error creating painting:', error);
        }
      },
      cancelEdit() {
        this.$router.push('/admin');
      }
    }
  };
  </script>
  
  <style scoped>
  .containerOfAll {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edit-form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #5e5343;
    color: #EFE9E4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
  .save-field {
    margin-top: 10px;
  }
  </style>
  