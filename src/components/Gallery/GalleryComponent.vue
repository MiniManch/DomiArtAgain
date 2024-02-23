<template>
  <div>
    <GalleryNav />
    <div class="gallery-arrows">
      
    </div>
    <div :class="['GalleryContainer',`GalleryContainer_page_${currentPage}`]">
      <div class="ArrowContainer">
        <img class="prev bttn" src="../../../public/images/icons/arrows/left-big.png" alt="Previous arrow" @click="prevPage"/>
      </div>
      <template v-for="(rowItems, rowIndex) in paginatedItems" :key="rowIndex">
        <div :class="[`page_${currentPage}_row_${rowIndex + 1}`,'GalleryRow']">
          <template v-for="(item, itemIndex) in rowItems" :key="itemIndex">
            <div :class="`item_${item.id}`" class="item">
              <img :class="['image', item.aspect]" :src="item.link_1" alt="Gallery Image" />
            </div>
          </template>
        </div>
      </template>
      <div class="ArrowContainer">
        <img class="next bttn" src="../../../public/images/icons/arrows/right-big.png" alt="Next arrow" @click="nextPage"/>
      </div>
    </div>
  </div>
</template>

<script>
import ImageStructure from '../../../public/data/GalleryImageStructure.json';
import convertArrays from '../../utils/utilFuncs.js';

import GalleryNav from './GalleryNav.vue';

export default {
  data() {
    return {
      currentPage: 1,
      structure: ImageStructure,
    };
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
      if (!pageStructure) return []; // Return empty array if structure for current page not found
      const structureArray = pageStructure.structure.split(' ').map(Number);
      return convertArrays(sorted, structureArray);
    },
  },
  methods:{
    nextPage(){
      // ADD ANIMATION FOR WHOLE PAGE ON CHANGE
      this.currentPage = this.currentPage + 1;
    },
    prevPage(){
      // ADD ANIMATION FOR WHOLE PAGE ON CHANGE
      this.currentPage = this.currentPage -1;
    }
  },
  components:{
    GalleryNav,
  }
};
</script>

<style scoped>
  /* adjust this to work on different sizes */
.gallery-arrows {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bttn{
  width: 100px; 
  height: 100px; 
  cursor: pointer;
}

.prev {
}

.next {
}

.ArrowContainer{
  display: flex;
  height:100%;
  align-items: center;
  justify-content: center;
}
.GalleryContainer {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  min-height: fit-content;
  margin: 0 auto;
  row-gap: 0;
}

.GalleryRow {
  margin-bottom: 20px; /* Add some space between rows */
}

.image {
  width: 100%; /* Make the image fill the item container */
  height: auto; /* Maintain aspect ratio */
}

.square {
  height: 22vw;
  width: 22vw;
}

.vertical {
  height: 44vw;
  width: 22vw;
}

.horizontal {
  height: 22vw;
  width: 44vw;
}

.page_1_row_1{
    width:60%;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    gap:20px;
}
</style>
