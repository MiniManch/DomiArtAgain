<template>
    <div class='everything' v-if="paginatedItems">
        <h1 ref="galleryTitle">Gallery</h1>
        <nav class="pagniationItem">
            <ul class="pagination pagination-sm mb-0 pb-5">
                <li class="page-item" v-for="(item, index) in paginatedItems" :key="index">
                    <span :class="['page-link', (index+1) === activePage ? 'activePage' : null]" @click="changeActivePage(index+1)">{{index + 1}}</span>
                </li>
            </ul>
        </nav>

        <div class="galleryContainer">
            <div class="row row-cols-1 row-cols-md-3 g-4 w-100">
                <div class="col mb-5" v-for="(item, index) in paginatedItems[this.activePage - 1]" :key="index">
                    <img :src="item.link_1" class="card-img-top image" alt="..." @click="openImage(item.id)">
                    <h5 class="image-title">{{item.title}}</h5>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <nav class="pagniationItem">
            <ul class="pagination pagination-sm mb-0 pb-5">
                <li class="page-item" v-for="(item, index) in paginatedItems" :key="index">
                    <span :class="['page-link', (index+1) === activePage ? 'activePage' : null]" @click="changeActivePage(index+1)">{{index + 1}}</span>
                </li>
            </ul>
        </nav>
    </div>
    <!-- Loading Modal -->
    <LoadingModal v-if="isLoading"/>
</template>

<script>
import imageData from "../../../public/data/GalleryImages.json";
import LoadingModal from "../General/LoadingModal.vue";

export default {
    data(){
        return {
            data: null,
            paginatedItems: null,
            activePage: 1,
            maxPages: null,
            isLoading: false
        }
    },
    mounted(){
        this.data = imageData;
        this.paginateData(5);
        this.maxPages = this.paginatedItems.length;
    },
    methods: {
        paginateData(pageSize) {
            this.paginatedItems = [];
            for (let i = 0; i < this.data.length; i += pageSize) {
                this.paginatedItems.push(this.data.slice(i, i + pageSize));
            }
        },
        changeActivePage(pageNum){
            if(this.activePage != pageNum){
                this.activePage = pageNum;
                this.isLoading = true;
                this.scrollToTitle();
                setTimeout(() => {
                    this.isLoading = false;
                }, 1200);
            }
        },
        scrollToTitle() {
            this.$refs.galleryTitle.scrollIntoView({ behavior: 'smooth' });
        },
        openImage(paintingId) {
            this.$router.push({ name: 'painting-detail', params: { id: paintingId } });
        },
    },
    components: {
        LoadingModal
    }
}
</script>

<style scoped>
    .everything {
        background-color: #EFE9E4;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
    h1 {
        color: #5E5343;
        font-family: "Playfair Display", serif;
        font-size: 6vh;
        margin-bottom: 5vh;
    }
    .image {
        max-height: 350px;
        margin-bottom: 2%;
    }
    .image-title {
        background-color: #5E5343;
        margin-bottom: 0;
        font-family: 'Comfortaa', sans-serif;
        color: #EFE9E4;
    }
    .pagniationItem {
        align-self: center;
    }
    .page-link {
        font-family: 'Comfortaa', sans-serif;
        font-size: 0.8em;
        background-color: #5E5343;
        border: 1px solid #5E5343;
        color: #EFE9E4;
    }
    .activePage {
        background-color: #EFE9E4;
        border: 1px solid #EFE9E4;
        color: #5E5343;
    }
    .row, .col {
        padding: 0;
    }
    .galleryContainer {
        display: flex;
        justify-content: center;
    }
</style>
