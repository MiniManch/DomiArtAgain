<template>
    <div class="overlay" >
        <div class="container">
            <img :src="data.link_2" alt="" class="image" ref="imageRef" @mousemove="handleMouseMove" @mouseout="handleMouseOut" >
            <div v-if="showMagnifier" class="magnifier" :style="{ backgroundImage: 'url(' + data.link_2 + ')', backgroundPosition: magnifierPosition }"></div>
        </div>
        <div class="close" @click="closeModal">
            <img src="../../../public/images/icons/close/150.png" alt="cancel"/>
        </div>
    </div>
</template>

<script>
import 'animate.css';

export default {
    name: 'GalleryItemModal',
    props: {
        func: Function,
        data: Object
    },
    data() {
        return {
            showMagnifier: false,
            magnifierPosition: '0% 0%'
        };
    },
    methods:{
        closeModal(){
            this.$emit('close');
        },
        handleMouseMove(event) {
            const targetElement = event.target;

            const mouseX = event.clientX - targetElement.getBoundingClientRect().left;
            const mouseY = event.clientY - targetElement.getBoundingClientRect().top;

            const imageWidth = this.$refs.imageRef.clientWidth;
            const imageHeight = this.$refs.imageRef.clientHeight;

            const magnifierWidth = (mouseX / imageWidth) * 100;
            const magnifierHeight = (mouseY / imageHeight) * 100 ;

            this.magnifierPosition = `${magnifierWidth}% ${magnifierHeight}%`;
            this.showMagnifier = true;

            this.$nextTick(() => {
                const magnifier = document.querySelector('.magnifier');

                magnifier.style.left = mouseX + 200 + 'px'; 
                magnifier.style.top = mouseY  + 'px'; 
            });
        },
        handleMouseOut(){
            this.showMagnifier = false;
        }

    }
}
</script>

<style scoped>
.overlay {
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgb(94, 83, 67,0.8);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center; /* Center the image vertically */
    height: 100%; /* Ensure the container takes up the full height of its parent */
    position: relative;
}

.image {
    max-width: 100%;
    max-height: 100%;
    min-width: 35vw;
}

.close{
    position: absolute;
    top:5vh;
    right:5vw;
    cursor: pointer; 
}

.magnifier {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid white;
    background-repeat: no-repeat;
    background-size: 800% 800%;
    background-position: 0 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: all 0s ease-in-out;
}

</style>