<template>
    <div class="overlay" @mousemove="handleMouseMove">
        <div class="container">
            <img :src="data.link_2" alt="" class="image" ref="imageRef">
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
            const imageRect = this.$refs.imageRef.getBoundingClientRect();
            const mouseX = event.clientX - imageRect.left/2;
            const mouseY = event.clientY - imageRect.top;
            const imageWidth = this.$refs.imageRef.clientWidth;
            const imageHeight = this.$refs.imageRef.clientHeight;
            const magnifierSize = 150; // Adjust size of magnifier as needed

            const magnifierX = (mouseX / imageWidth) * 100;
            const magnifierY = (mouseY / imageHeight) * 100 ;

           
            this.magnifierPosition = `${magnifierX}% ${magnifierY}%`;
            this.showMagnifier = true;

            this.$nextTick(() => {
                const magnifier = document.querySelector('.magnifier');

                // Adjust magnifier position based on its size
                const magnifierOffsetX = magnifierSize / 2;
                const magnifierOffsetY = magnifierSize / 2;

                magnifier.style.left = mouseX - magnifierOffsetX + 'px'; // Position magnifier next to cursor horizontally
                magnifier.style.top = mouseY - magnifierOffsetY + 'px'; // Position magnifier next to cursor vertically
            });
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
    background-size: 300% 300%;
    background-position: 0 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: all 0s ease-in-out;
}
</style>
