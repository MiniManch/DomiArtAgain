<template>
    <div class="loading-container">
        <img src="../../../public/images/icons/loading/loading.gif">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .loading-container {
        position: fixed;
        z-index: 6;
        top: 0;
        left:0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width:300px;
        height:300px;
        }
</style>