<template>
  <div class="everything">
    <PopUpModal v-if="showModal" :title="modalTitle" :message="modalMessage" @close="closeModal" />
    <LoadingModal v-if="isLoading" />
    <div :class="['contact-form']">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model.trim="email" required>
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model.trim="subject" required>
        </div>
        <div class="form-group">
          <label for="info">Message:</label>
          <textarea id="info" v-model.trim="info" rows="5" cols="30" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>


<script>
import 'animate.css';
import emailjs from 'emailjs-com';

import PopUpModal from '../General/PopUpModal.vue';
import LoadingModal from '../General/LoadingModal.vue';

export default {
  props: ['animation'],
  data() {
    return {
      email: '',
      subject: '',
      info: '',
      showModal:false,
      modalTitle:null,
      modalMessage:null,
      isLoading: false,
    };
  },
  methods: {
    test(){
      this.isLoading = true;
    },
    async submitForm() {
      if (!this.email || !this.subject || !this.info ) {
        alert('Please fill in all fields.');
        return;
      }
      this.isLoading = true;
      try {
        const response = await emailjs.send(
          'service_lzb1hea', 
          'template_vi75s0q', 
          {
            to_email: this.email,
            subject: this.subject,
            message: this.info,
          },
          'IPrktzaxEumc9aLIZ' 
        );
        
        console.log('Email sent:', response);
        this.isLoading = false;
        this.openModal('Email sent Successfully')
        
        this.email = '';
        this.subject = '';
        this.info = '';
        this.publicKey = '';
      } catch (error) {
        console.error('Error sending email:', error);
        this.openModal('Error sending email. Please try again later.');
      }
    },
    openModal(title,message){
      this.modalTitle = title;
      this.modalMessage = message;
      this.showModal = true;
    },
    closeModal(){
      this.modalTitle= null;
      this.modalMessage = null;
      this.showModal = false;
    }
  },
  components:{
    PopUpModal,
    LoadingModal
  }
}

</script>

<style scoped>
.contact-form {
  width:20vw;
  margin: 0 auto;
  margin-left: 5vh;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 1vh;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height:20vh;
  resize: none; 
}

button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #5E5343;
  color: #EFE9E4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s; /* Add transition for smooth hover effect */
}

button:hover {
  transform: scale(1.05); /* Scale the button slightly on hover */
}

.upper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.upper>img{
  width:30px;
}

textarea:focus,
input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #5E5343; 
  outline: none;
  border-width: 3px;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .contact-form {
    width:60vw;
    margin-left: 0;
  }
  button {
  background-color:  #EFE9E4;
  color: #5E5343;
}
}
</style>
