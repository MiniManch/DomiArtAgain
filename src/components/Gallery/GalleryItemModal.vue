<template>
    <div class="overlay">
        <div class="container">
            <img :src="data.link_2" alt="" class="image" ref="imageRef" @mousemove="handleMouseMove" @mouseout="handleMouseOut">
            <div v-if="showMagnifier" class="magnifier" :style="{ backgroundImage: 'url(' + data.link_2 + ')', backgroundPosition: magnifierPosition, left: magnifierLeft, top: magnifierTop }"></div>
        </div>
        <div class="close" @click="closeModal">
            <img :src="closeBtnSrc" alt="cancel"/>
        </div>
    </div>
</template>

<script>
import 'animate.css';

export default {
    name: 'GalleryItemModal',
    props: {
        func: Function,
        data: Object,
        isMobileSrc: Boolean,
    },
    data() {
        return {
            showMagnifier: false,
            magnifierPosition: '0% 0%',
            magnifierLeft: '0vw',
            magnifierTop: '0vw',
            closeBtnSrc: null,
        };
    },
    mounted() {
        this.closeBtnSrc = this.isMobileSrc ? '/images/icons/close/50.png' : '/images/icons/close/100.png';
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleMouseMove(event) {
            const targetElement = event.target;

            const mouseX = event.clientX - targetElement.getBoundingClientRect().left;
            const mouseY = event.clientY - targetElement.getBoundingClientRect().top;

            const imageWidth = this.$refs.imageRef.clientWidth;
            const imageHeight = this.$refs.imageRef.clientHeight;

            const magnifierWidth = (mouseX / imageWidth) * 100;
            const magnifierHeight = (mouseY / imageHeight) * 100;

            this.magnifierPosition = `${magnifierWidth}% ${magnifierHeight}%`;
            this.showMagnifier = true;

            // Convert mouseX and mouseY to vw units
            const screenWidth = window.innerWidth;
            const vwMouseX = (mouseX / screenWidth) * 100;
            const vwMouseY = (mouseY / screenWidth) * 100;

            // Calculate the equivalent of 400 pixels in vw units
            const offsetVW = (400 / screenWidth) * 100;

            this.magnifierLeft = `calc(${vwMouseX}vw + ${offsetVW}vw)`;
            this.magnifierTop = `${vwMouseY}vw`;
        },
        handleMouseOut() {
            this.showMagnifier = false;
        }
    }
}
</script>

<style scoped>
.overlay {
    z-index: 5;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(94, 83, 67, 0.8);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
}

.image {
    max-width: 100%;
    max-height: 100%;
    min-width: 35vw;
}

.close {
    position: absolute;
    top: 5vh;
    right: 5vw;
    cursor: pointer;
    width: 5vw;
}

.close > img {
    width: 100%;
    height: 100%;
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
