<template>
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
                    <h3 v-if="!openMessageForm" @click="toggleMessageForm">Send us a direct message!</h3>
                    <MessageForm v-else />
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
    name:'contactPage',
    data(){
        return{
            openMessageForm: false,
        }
    },
    methods:{
        toggleMessageForm(){
            this.openMessageForm = !this.openMessageForm
        }
    },
    components:{
        MessageForm,
    }
}
</script>
<style scoped>
.all{
    font-family:"Comfortaa";
    width:100vw;
    height:100vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:8vw;

    background-color: #EFE9E4;
    color:#5E5343;

}
.info{
    display: flex;
    flex-direction: column;
    margin-left: 18vw;

    align-items: flex-start;
    width:30vw;
}
h1{
    font-size: 6em;
    margin-bottom: 5vh;
    color:#5E5343;
}
.icon{
    width:80px;
    height:80px;

    margin-left: 1vw;
}

.contact-ways{
    display:flex;
    flex-direction: column;
    gap:5vh;
}

.image>img{
    width:40vw;

    border-bottom-left-radius: 100%;
}

.contact{
    display: flex;
    flex-direction: row;

    align-items: center;
}

.contact > h3{
    margin-left:2vw;
}

.message > h3{
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.5s;
}

.message > h3:hover{
    font-size: 2em;
}

</style>