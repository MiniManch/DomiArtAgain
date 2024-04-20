<template>
  <div :class="['contact-form animate_animated', animation]">
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
</template>

<script>
import 'animate.css';

export default {
  props:['animation'],
  data() {
      return {
          email: '',
          subject: '',
          info: ''
      };
  },
  methods: {
      submitForm() {
          if (!this.email || !this.subject || !this.info) {
              alert('Please fill in all fields.');
              return;
          }
          // Code to handle form submission (e.g., send data to backend)
          console.log('Form submitted:', {
              email: this.email,
              subject: this.subject,
              info: this.info
          });
          // Reset form fields after submission
          this.email = '';
          this.subject = '';
          this.info = '';
          alert('Form submitted successfully!');
      },
  }
};
</script>

<style scoped>
.contact-form {
  width:20vw;
  margin: 0 auto;
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
  background-color: #5E5343;
  color: #fff;
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
</style>
