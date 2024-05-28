<template >
    <div class='everything'>
        <div class="content">
            <div class='socials'>
                <a href='https://www.facebook.com/profile.php?id=100063518798255' target='_blank' >
                   <img src='/images/icons/social/facebook.png' />
                 </a>
                 <a href='https://www.instagram.com/domiabstractart/' target="_blank">
                     <img src ='/images/icons/social/instagram.png' />
                 </a>
            </div>
            <div class='credits'>
                All icons by <a href='https://icons8.com/' target=”_blank”>icons8</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .everything{
        width:100vw;
        color: #EFE9E4; 
        background-color: #5E5343;
        font-family: 'Comfortaa', sans-serif;
        display:flex;
        justify-content: center;
    }
    .content{
        padding-top: 1vh;
    }

    .credits{
        font-size: 0.8em;
    }

    .credits>a{
        font-weight: bold;
        color: #EFE9E4; 
        font-size:1.2em;
    }
</style>