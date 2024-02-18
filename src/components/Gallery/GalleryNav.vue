<template>
  <div class="gallery-nav">
    <div class="filter-section">
      <h3>Filter by Palette:</h3>
      <select v-model="selectedPalette" @change="filterByPalette">
        <option value="">All</option>
        <option v-for="palette in palettes" :key="palette.id" :value="palette.id">{{ palette.name }}</option>
      </select>
    </div>
    <div class="filter-section">
      <h3>Filter by Aspect Ratio:</h3>
      <select v-model="selectedAspectRatio" @change="filterByAspectRatio">
        <option value="">All</option>
        <option v-for="aspectRatio in aspectRatios" :key="aspectRatio.id" :value="aspectRatio.id">{{ aspectRatio.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPalette: "",
      selectedAspectRatio: "",
      palettes: [
        { id: "1", name: "Palette 1" },
        { id: "2", name: "Palette 2" },
        { id: "3", name: "Palette 3" },
      ],
      aspectRatios: [
        { id: "1", name: "Aspect Ratio 1" },
        { id: "2", name: "Aspect Ratio 2" },
        { id: "3", name: "Aspect Ratio 3" },
      ],
    };
  },
  methods: {
    filterByPalette() {
      // Implement your filtering logic based on selectedPalette
    },
    filterByAspectRatio() {
      // Implement your filtering logic based on selectedAspectRatio
    },
  },
};
</script>

<style scoped>
.gallery-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter-section {
  display: flex;
  align-items: center;
}

h3 {
  margin-right: 10px;
}
</style>
