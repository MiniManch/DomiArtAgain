<template>
  <div class="everything">
    <MainNavbar />
    <GalleryNav />
    <div :class="['GalleryContainer']">
      <div class="arrowContainer" >
        <img class="prev bttn" src="../../../public/images/icons/arrows/left-big.png" alt="Previous arrow" @click="prevPage" :disabled="animating"/>
      </div>
      <div :class="['gallery',`gallery_page_${currentPage}`,'animate__animated',animating ? animation : null]">
      <template v-for="(rowItems, rowIndex) in paginatedItems" :key="rowIndex">
        <div :class="[`page_${currentPage}_row_${rowIndex + 1}`,'GalleryRow']">
          <template v-for="(item, itemIndex) in rowItems" :key="itemIndex">
            <div :class="`item_${item.id}`" class="item" >
              <img :class="['image', item.aspect]" :src="item.link_1" alt="Gallery Image" @click="openImage(item.id)"/>
            </div>
          </template>
        </div>
      </template>
    </div>
      <div class="arrowContainer">
        <img class="next bttn" src="../../../public/images/icons/arrows/right-big.png" alt="Next arrow" @click="nextPage" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageStructure from '../../../public/data/GalleryImageStructure.json';
import {convertArrays} from '../../utils/utilFuncs.js';

// import { convertArrays, disableScroll, enableScroll } from '../../utils/utilFuncs.js';



import 'animate.css';

import GalleryNav from './GalleryNav.vue';
import MainNavbar from '../General/MainNavbar.vue';

export default {
  data() {
    return {
      currentPage: 1,
      structure: ImageStructure,
      animating: false,
      animation: null,
      animation_duration: 1000,
      maxPage:3,
      minPage:1,
      showModal:false,
      modalData:null
    }
  },

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    paginatedItems() {
      const items = this.data.filter(item => item.page == this.currentPage);
      const sorted = items.sort((a, b) => Number(a.order) - Number(b.order));
      const pageStructure = this.structure.find(item => item.page == this.currentPage);
      if (!pageStructure) return [];
      const structureArray = pageStructure.structure.split(' ').map(Number);
      return convertArrays(sorted, structureArray);
    },
  },

  methods:{
    openImage(paintingId){
      this.$router.push({ name: 'painting-detail', params: { id: paintingId } });
     },
    nextPage(){
      if(this.currentPage == this.maxPage) return
      this.animateGallery('forward');
    },
    prevPage(){
      if(this.currentPage == this.minPage) return
      this.animateGallery('backward');
    },
    animateGallery(direction) {
      if (!this.animating) {
        this.animating = true;
        if (direction === 'forward') {
          this.animation = 'animate__fadeOutRight';
          setTimeout(() => {
            this.currentPage++;
            this.animation = 'animate__fadeInLeft';
          }, this.animation_duration);

        } else if (direction === 'backward') {
          this.animation = 'animate__fadeOutLeft';
          setTimeout(() => {
            this.currentPage--;
            this.animation = 'animate__fadeInRight';
          }, this.animation_duration);
        }
        setTimeout(() => {
          this.animating = false;
          this.animation = null;
        }, this.animation_duration * 2);
      }
    },
  },

  components:{
    GalleryNav,
    MainNavbar
  }
};
</script>

<style scoped>

.GalleryContainer {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: fit-content;
  height:100vh;
  row-gap: 0;
}

.gallery{
  display: flex;
  justify-content: center;
  width:100%
}

.page_1_row_1{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    width:55%;
    justify-content: flex-end;
    margin-right: 2vw;
}
.page_1_row_2{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content: center;
}

.gallery_page_2{
  flex-direction: column;
}

.page_2_row_1{
  display:flex;
  flex-direction: row;
  justify-content: center;
  gap:20px;
  margin-right: 2vw;
}
.page_2_row_2{
  display:flex;
  flex-direction: row;
  gap:20px;
  justify-content: center;
}

.page_2_row_2{
  display:flex;
  flex-direction: row;
  gap:20px;
  justify-content: center;
}
.page_3_row_1{
  display:flex;
  justify-content: center;
  flex-direction: column;
  gap:20px;
  margin-right: 2vw;
}
.page_3_row_3{
  display:flex;
  justify-content: center;
  flex-direction: column;
  gap:20px;
  margin-left: 2vw;
}
.GalleryRow {
  margin-bottom: 20px; /* Add some space between rows */
}
.arrowContainer {
  display: flex;
  height:100%;
  flex-direction: column;
  justify-content: center;
}
.bttn{
  cursor: pointer;
}
.prev{
  margin-left:2vw;
}
.next{
  margin-right:2vw;
}
.square {
  height: 22vw;
  width: 22vw;
}
.vertical {
  height: 44vw;
}
.horizontal {
  height: 22vw;
  width: 44vw;
}
.everything{
  background-color: #EFE9E4;
}
</style>