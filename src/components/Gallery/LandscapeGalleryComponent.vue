<template>
  <div class="everything" id="Gallery">
    <h1>Gallery</h1>
    <div :class="['GalleryContainer']">
      <!-- Previous arrow -->
      <div class="arrowContainer">
        <img
          :class="['prev', 'bttn', currentPage === minPage ? 'disabled' : null]"
          src="../../../public/images/icons/arrows/left-big.png"
          alt="Previous arrow"
          @click="prevPage"
          :disabled="animating"
        />
      </div>

      <!-- Gallery -->
      <div
        :class="['gallery', `gallery_page_${currentPage}`, 'animate__animated', animating ? animation : null]"
      >
        <template v-for="(rowItems, rowIndex) in paginatedItems" :key="rowIndex">
          <div :class="[currentPage > 3 ? 'default-row-styling': null,`page_${currentPage}_row_${rowIndex + 1}`, 'GalleryRow']">
            <template v-for="(item, itemIndex) in rowItems" :key="itemIndex">
              <div :class="`item_${item.id}`" class="item" @click="openImage(item.id)">
                <!-- Image -->
                <img
                  :id="`painting_${item.id}`"
                  :class="['image', item.aspect, animating ? 'animating' : null]"
                  :src="item.link_1"
                  alt="Gallery Image"
                />
                <!-- Image title template -->
                <div class="imageTitleTemplate" :style="{ bottom: item.aspect === 'horizontal' ? '8vh' : '6vh' }">
                  {{ item.title }}
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>

      <!-- Next arrow -->
      <div class="arrowContainer">
        <img
          :class="['next', 'bttn', currentPage === maxPage ? 'disabled' : null]"
          src="../../../public/images/icons/arrows/right-big.png"
          alt="Next arrow"
          @click="nextPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageStructure from '../../../public/data/GalleryImageStructure.json';
import { convertArrays } from '../../utils/utilFuncs.js';
import 'animate.css';

export default {
  data() {
    return {
      currentPage: 1,
      structure: ImageStructure,
      animating: false,
      animation: null,
      animation_duration: 600,
      maxPage: 5,
      minPage: 1,
      showModal: false,
      modalData: null,
      loading: false,
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
      // Get items that match the current page
      let items = this.data.filter((item) => item.page == this.currentPage && item.order);
      console.log(items)
      // Sort the items by order
      const sorted = items.sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
      // Get the structure for the current page
      const pageStructure = this.structure.find((item) => item.page == this.currentPage);
      // Convert the structure into an array of numbers
      const structureArray = pageStructure.structure.split(' ').map(Number);
      return convertArrays(sorted, structureArray);
    },
  },
  methods: {
    openImage(paintingId) {
      this.$router.push({ name: 'painting-detail', params: { id: paintingId } });
    },
    nextPage() {
      if (this.currentPage === this.maxPage) return;
      const nextPage = this.currentPage + 1;
      if (nextPage <= this.maxPage) {
        this.preloadImages(nextPage);
      }
      this.animateGallery('forward');
    },
    prevPage() {
      if (this.currentPage === this.minPage) return;
      const prevPage = this.currentPage - 1;
      if (prevPage >= this.minPage) {
        this.preloadImages(prevPage);
      }
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
    preloadImages(page) {
      const items = this.data.filter((item) => item.page == page);
      items.forEach((item) => {
        const img = new Image();
        img.src = item.link_1;
      });
    },
  },
};
</script>

<style scoped>
*{
  animation-duration:0.6s;
}
h1 {
  color: #5e5343;
  font-family: 'Playfair Display', serif;
  font-size: 8vh;
  margin-bottom: 5vh;
}
.GalleryContainer {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: fit-content;
  height: 100vh;
  row-gap: 0;
}
.gallery {
  display: flex;
  justify-content: center;
  width: 100%;
}

.GalleryRow.page_1_row_1 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 55%;
  justify-content: flex-end;
  margin-right: 2vw;
}
.GalleryRow.page_1_row_2 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.gallery_page_2,.gallery_page_4,.gallery_page_5 {
  flex-direction: column;
}
.GalleryRow.page_2_row_1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-right: 2vw;
}
.GalleryRow.page_2_row_2 {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}
.GalleryRow.page_2_row_2 {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}
.GalleryRow.page_3_row_1 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-right: 2vw;
}
.GalleryRow.page_3_row_3 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-left: 2vw;
}

.GalleryRow.page_4_row_1 {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-right: 2vw;
}
.GalleryRow.page_4_row_2 {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.GalleryRow.page_5_row_1 {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-right: 2vw;
}
.GalleryRow.page_5_row_2 {
  display: flex;
  justify-content: center;
}
.GalleryRow {
  margin-bottom: 20px;
}
.arrowContainer {
  display: flex;
  height: 100%;
  width:5vw;
  flex-direction: column;
  justify-content: center;
}
.bttn {
  cursor: pointer;
  z-index: 5;
}
.prev {
  margin-left: 2vw;
}
.next {
  margin-right: 2vw;
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
.image {
  cursor: pointer;
}
.everything {
  background-color: #efe9e4;
  padding-top: 5vh;
  padding-bottom: 10vh;
}
.imageTitleTemplate {
  background-color: rgba(94, 83, 67, 0.9);
  height: 4vh;
  width: 80%;
  position: relative;
  left: 10%;
  color: #efe9e4;
  font-family: 'Comfortaa', sans-serif;
  line-height: 4vh;
  text-align: center;
  transition: opacity 0.5s ease;
  opacity: 0;
  cursor:pointer;
}
.item:hover .imageTitleTemplate {
  opacity: 1;
}

.disabled{
  opacity:0.5;
}
</style>
