<template>
  <div class="containerOfAll">
    <div v-if="painting" class="edit-form-container">
      <h2>Edit Painting</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title</label>
          <div class="input-group">
            <input type="text" id="title" v-model="painting.title" class="form-control" required />
            <button type="button" class="btn btn-primary save-field" @click="updateField('title', painting.title)">Save Title</button>
          </div>
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <div class="input-group">
            <input type="text" id="year" v-model="painting.year" class="form-control" required />
            <button type="button" class="btn btn-primary save-field" @click="updateField('year', painting.year)">Save Year</button>
          </div>
        </div>
        <div class="form-group">
          <label for="aspect">Aspect</label>
          <div class="input-group">
            <input type="text" id="aspect" v-model="painting.aspect" class="form-control" required />
            <button type="button" class="btn btn-primary save-field" @click="updateField('aspect', painting.aspect)">Save Aspect</button>
          </div>
        </div>
        <div class="form-group">
          <label for="text">Description</label>
          <div class="input-group">
            <textarea id="text" v-model="painting.text" class="form-control" required></textarea>
            <button type="button" class="btn btn-primary save-field" @click="updateField('text', painting.text)">Save Description</button>
          </div>
        </div>
        <div class="form-group">
          <label for="page">Page</label>
          <div class="input-group">
            <input type="text" id="page" v-model="painting.page" class="form-control" required />
            <button type="button" class="btn btn-primary save-field" @click="updateField('page', painting.page)">Save Page</button>
          </div>
        </div>
        <div class="form-group">
          <label for="order">Order</label>
          <div class="input-group">
            <input type="text" id="order" v-model="painting.order" class="form-control" required />
            <button type="button" class="btn btn-primary save-field" @click="updateField('order', painting.order)">Save Order</button>
          </div>
        </div>
        <div class="form-group">
          <label for="link_1">Primary Image</label>
          <div class="input-group">
            <input type="file" id="link_1" @change="onFileChange($event, 'link_1')" class="form-control-file" />
            <button type="button" class="btn btn-primary save-field" @click="uploadFile('link_1')">Save Primary Image</button>
          </div>
        </div>
        <div class="form-group">
          <label for="link_2">Secondary Image</label>
          <div class="input-group">
            <input type="file" id="link_2" @change="onFileChange($event, 'link_2')" class="form-control-file" />
            <button type="button" class="btn btn-primary save-field" @click="uploadFile('link_2')">Save Secondary Image</button>
          </div>
        </div>
        <div class="button-group">
          <button type="button" class="btn btn-danger" @click="showYesNoModal">Delete Painting</button>
          <button type="button" class="btn btn-warning" @click="cancelEdit">Cancel</button>
        </div>
      </form>
    </div>
    <!-- Modal -->
    <PopUpModal v-if="showModal" :title="modalTitle" :message="modalMessage" @close="showModal = false" />
    <!-- Yes/No Modal -->
    <YesNoModal v-if="showDeleteModal" title="Confirm Deletion" message="Are you sure you want to delete this painting?" @yes="confirmDelete" @close="showDeleteModal = false" />
  </div>
</template>

<script>
import axios from 'axios';
import PopUpModal from "@/components/General/PopUpModal.vue";
import YesNoModal from "@/components/General/YesNoModal.vue";

export default {
  name: 'EditPaintingForm',
  data() {
    return {
      painting: null,
      selectedFiles: {
        link_1: null,
        link_2: null
      },
      showModal: false,
      modalTitle: '',
      modalMessage: '',
      showDeleteModal: false,
      ItemToDelete: null
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
      .then(()=> {
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
        this.showModal = true;
        this.modalTitle = 'Success';
        this.modalMessage = `${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully.`;
      })
      .catch(error => {
        this.showModal = true;
        this.modalTitle = 'Error';
        this.modalMessage = `Failed to update ${field}.`;
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
        this.showModal = true;
        this.modalTitle = 'Success';
        this.modalMessage = `${field === 'link_1' ? 'Primary' : 'Secondary'} image uploaded successfully.`;
      })
      .catch(error => {
        this.showModal = true;
        this.modalTitle = 'Error';
        this.modalMessage = `Failed to upload ${field === 'link_1' ? 'Primary' : 'Secondary'} image.`;
        console.error('Error uploading file:', error);
      });
    },
    showYesNoModal(){
      this.showDeleteModal = true;
    },
    deletePainting() {
      const paintingID = this.$route.params.id;
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/image/${paintingID}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
        }
      })
      .then(() => {
        this.showModal = true;
        this.modalTitle = 'Success';
        this.modalMessage = 'Painting deleted successfully.';
        this.$router.push('/admin');
      })
      .catch(error => {
        this.showModal = true;
        this.modalTitle = 'Error';
        this.modalMessage = 'Failed to delete painting.';
        if (error.response.request.status === 401) {
          localStorage.setItem('DomiArt_token', null);
          this.$router.push('/admin/login');
        }
        console.error('Error deleting painting:', error);
      });
    },
    confirmDelete() {
      this.deletePainting();
      this.showDeleteModal = false;
    },
    cancelEdit() {
      this.checkToken();
      this.$router.push('/admin/images');
    }
  },
  components: {
    PopUpModal,
    YesNoModal
  }
};
</script>

<style scoped>
.containerOfAll {
  padding-top: 10vh;
  padding-bottom: 5vh;
  width: 100vw;
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFE9E4;
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
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
}
.input-group {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.save-field {
  margin-left: 10px;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
</style>
