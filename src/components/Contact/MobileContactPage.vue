<template>
    <div class="all" id="Contact">
      <div class="info">
        <h1>Contact Us</h1>
        <div class="contact-ways">
          <div class="phone contact">
            <img src="../../../public/images/icons/contact/phone-50.png" alt="" class="icon">
            <h3>+972-54-6232911</h3>
          </div>
          <div class="email contact">
            <img src="../../../public/images/icons/contact/email-50.png" alt="" class="icon">
            <div class="email-text">
            <h3>DomiAbstractArt</h3>
            <h3>@Gmail.com</h3>
            </div>
          </div>
          <div class="message contact">
            <div>
              <img src="../../../public/images/icons/contact/message-50.png" alt="" class="icon">
              <h3>Send us a message!</h3>
            </div>
            <div class="messageContent">
                <MessageForm/>
            </div>
          </div>
        </div>
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
    padding-bottom: 5vh;
    gap: 8vw;
    background-image: url('https://res.cloudinary.com/drzcke4vu/image/upload/v1712574694/DomiArt/wcwvyaayzwmre3iqbltk.jpg');
    color: #EFE9E4;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  h1 {
    font-size: 5em;
    margin-bottom: 5vh;
    color: #EFE9E4;
    font-family: "Playfair Display", serif;
  }
  
  .contact-ways {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
  }
  
  .image>img {
    width: 100vw;
    height:50%;
  }
  
  .email-text{
    margin-left:2vw;
  }
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;

    font-size: 0.8em;

    background-color: rgb(94, 83, 67,0.6);
    padding:1vh;
  }
  
  .contact > h3 {
    margin-left: 2vw;
  }
  
  .message >div> h3 {
    padding-top: 1vh;
  }
  
  .message > h3:hover {
    font-size: 2em;
  }
  .message{
    display: flex;
    flex-direction: column;
  }
  .message > div{
    display: flex;
    flex-direction: row;
    gap:2vw;
  }
  .messageContent{
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .messageContent>h3{
    margin-bottom: 3vh;
    margin-left: 2vw;
    width:fit-content;
  }

  </style>
  