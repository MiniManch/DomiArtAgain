<template>
    <div class="contact-form">
        <div class="upper">
            <img src="../../../public/images/icons/close/50-dark.png" alt="" class="icon">
        </div>
        
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
                <textarea id="info" v-model.trim="info" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
  </template>
  
  <script>
  export default {
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
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    width:20vw;
    margin: 0 auto;
    margin-left:3vw;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #5E5343;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    
  }
  
  .upper{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .upper>img{
    width:30px;
  }
  </style>
  