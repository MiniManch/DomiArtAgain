<template>
    mobile
    <div class="all">
      <div class="info">
        <h1>Contact Us</h1>
        <div class="contact-ways">
          <div class="phone contact">
            <img src="../../../public/images/icons/contact/phone-100.png" alt="" class="icon">
            <h3>+972-54-7232823</h3>
          </div>
          <div class="email contact">
            <img src="../../../public/images/icons/contact/email-100.png" alt="" class="icon">
            <h3>Email@Email.com</h3>
          </div>
          <div class="message contact">
            <img src="../../../public/images/icons/contact/message-100.png" alt="" class="icon">
            <div class="messageContent">
                <h3>Send us a direct message!</h3>
                <MessageForm/>
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img src="https://res.cloudinary.com/drzcke4vu/image/upload/v1712574694/DomiArt/wcwvyaayzwmre3iqbltk.jpg" alt="">
      </div>
    </div>
  </template>
  
  <script>
  import MessageForm from './MessageForm.vue'
  
  export default {
    name: 'contactPage',
    data() {
      return {
        openMessageForm: false,
        animation: null,
        isRemoving: false
      }
    },
    components: {
      MessageForm,
    }
  }
  </script>
  
  <style scoped>
  .all {
    font-family: "Comfortaa";
    width: 100vw;
    min-height: 100vh;
    height:fit-content;
    padding-bottom: 5vh;
    display: flex;
    flex-direction: column-reverse;
    gap: 8vw;
    background-color: #EFE9E4;
    color: #5e5343;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30vw;
  }
  
  h1 {
    font-size: 5em;
    margin-bottom: 5vh;
    color: #5e5343;
  }
  
  .icon {
    width: 80px;
    height: 80px;
    margin-left: 1vw;
  }
  
  .contact-ways {
    display: flex;
    flex-direction: column;
    gap: 5vh;
  }
  
  .image>img {
    width: 100vw;
    height:50%;
  }
  
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .contact > h3 {
    margin-left: 2vw;
  }
  
  .message > h3 {
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.5s;
  }
  
  .message > h3:hover {
    font-size: 2em;
  }
  .message{
    display: flex;
    align-items: flex-start;
  }
  .messageContent{
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .messageContent>h3{
    margin-bottom: 3vh;
    margin-left: 2vw;
    width:fit-content;
  }
  </style>
  