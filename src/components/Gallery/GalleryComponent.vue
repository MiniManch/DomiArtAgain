<template>
  <div>
    <GalleryNav />
    <div :class="['GalleryContainer',`GalleryContainer_page_${currentPage}`]">
      <div class="arrowContainer">
        <img class="prev bttn" src="../../../public/images/icons/arrows/left-big.png" alt="Previous arrow" @click="prevPage"/>
      </div>
      <div class="gallery">
      <template v-for="(rowItems, rowIndex) in paginatedItems" :key="rowIndex">
        <div :class="[`page_${currentPage}_row_${rowIndex + 1}`,'GalleryRow']">
          <template v-for="(item, itemIndex) in rowItems" :key="itemIndex">
            <div :class="`item_${item.id}`" class="item">
              <img :class="['image', item.aspect]" :src="item.link_1" alt="Gallery Image" />
            </div>
          </template>
        </div>
      </template>
    </div>
      <div class="arrowContainer">
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
  width: 22vw;
}

.horizontal {
  height: 22vw;
  width: 44vw;
}

</style>
