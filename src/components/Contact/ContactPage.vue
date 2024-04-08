<template>
    <div class="all">
        <div class="info">
            <h1>Contact Us</h1>
            <div class="contact-ways">
                <div class="phone">
                    <img src="../../../public/images/icons/contact/phone-100.png" alt="" class="icon">
                </div>
                <div class="email">
                    <img src="../../../public/images/icons/contact/email-100.png" alt="" class="icon">
                </div>
                <div class="contact">
                    <img src="../../../public/images/icons/contact/message-100.png" alt="" class="icon">
                </div>
            </div>
        </div>
        <div class="image">
            <img src="https://res.cloudinary.com/drzcke4vu/image/upload/v1712574694/DomiArt/wcwvyaayzwmre3iqbltk.jpg" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
    name:'contactPage',
}
</script>
<style scoped>
.all{
    font-family:"Comfortaa";
    width:100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:10vw;

    background-color: #EFE9E4;

}
.info{
    display: flex;
    flex-direction: column;
    margin-left: 20vw;

    align-items: flex-start;
}
h1{
    font-size: 6em;
    margin-bottom: 5vh;
    color:#5E5343;
}
.icon{
    width:80px;
    height:80px;

    margin-left: 3vw;
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
</style>