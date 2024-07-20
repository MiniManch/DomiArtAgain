<template>
  <div class="containerOfAll">
    <div v-if="painting" class="edit-form-container">
      <h2>Edit Painting</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="painting.title" class="form-control" required />
          <button type="button" class="btn btn-primary save-field" @click="updateField('title', painting.title)">Save Title</button>
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="text" id="year" v-model="painting.year" class="form-control" required />
          <button type="button" class="btn btn-primary save-field" @click="updateField('year', painting.year)">Save Year</button>
        </div>
        <div class="form-group">
          <label for="text">Description</label>
          <textarea id="text" v-model="painting.text" class="form-control" required></textarea>
          <button type="button" class="btn btn-primary save-field" @click="updateField('text', painting.text)">Save Description</button>
        </div>
        <div class="form-group">
          <label for="link_1">Primary Image</label>
          <input type="file" id="link_1" @change="onFileChange($event, 'link_1')" class="form-control-file" />
          <button type="button" class="btn btn-primary save-field" @click="uploadFile('link_1')">Save Primary Image</button>
        </div>
        <div class="form-group">
          <label for="link_2">Secondary Image</label>
          <input type="file" id="link_2" @change="onFileChange($event, 'link_2')" class="form-control-file" />
          <button type="button" class="btn btn-primary save-field" @click="uploadFile('link_2')">Save Secondary Image</button>
        </div>
        <button type="button" class="btn btn-danger" @click="deletePainting">Delete Painting</button>
        <button type="button" class="btn btn-warning cancel" @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditPaintingForm',
  data() {
    return {
      painting: null,
      selectedFiles: {
        link_1: null,
        link_2: null
      }
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const paintingID = this.$route.params.id;
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/image/${paintingID}`)
        .then(response => {
          this.painting = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    checkToken() {
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
        if (error.response.request.status === 401) {
          localStorage.setItem('DomiArt_token', null);
          this.$router.push('/admin/login');
        }
        console.error('Error checking token:', error);
      });
    },
    updateField(field, value) {
      const paintingID = this.$route.params.id;
      axios.put(`${process.env.VUE_APP_BACKEND_URL}/image/${paintingID}/${field}`, { value }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
        }
      })
      .then(response => {
        this.painting = response.data;
      })
      .catch(error => {
        if (error.response.request.status === 401) {
          localStorage.setItem('DomiArt_token', null);
          this.$router.push('/admin/login');
        }
        console.error('Error updating field:', error);
      });
    },
    onFileChange(event, field) {
      this.selectedFiles[field] = event.target.files[0];
    },
    uploadFile(field) {
      const file = this.selectedFiles[field];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      const paintingID = this.$route.params.id;
      axios.put(`${process.env.VUE_APP_BACKEND_URL}/image/${paintingID}/${field}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
        }
      })
      .then(() => {
        this.fetchData();
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    },
    deletePainting() {
      const paintingID = this.$route.params.id;
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/image/${paintingID}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
        }
      })
      .then(() => {

      })
      .catch(error => {
        if (error.response.request.status === 401) {
          localStorage.setItem('DomiArt_token', null);
          this.$router.push('/admin/login');
        }
        console.error('Error deleting painting:', error);
      });
    },
    submitForm() {
      console.log('Form submitted');
    },
    cancelEdit() {
      this.checkToken();
      this.$router.push('/admin');
    }
  }
};
</script>

<style scoped>
.containerOfAll {
  width: 100vw;
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#EFE9E4 ;
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
