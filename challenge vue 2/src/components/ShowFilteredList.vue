<template>
  <div class="filter-container">
    <h3>Filtrar por {{ filterLabel }}:</h3>
    <select
      multiple
      v-model="selectedOptions"
      @change="applyFilters"
      class="filter-select"
    >
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ShowFilteredList",
  props: {
    options: {
      type: Array,
      required: true,
    },
    filterLabel: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedOptions: [],
    };
  },
  methods: {
    applyFilters() {
      this.$emit("filter", this.selectedOptions);
    },
  },
};
</script>

<style lang="css" scoped>
.filter-container {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
}

.filter-container h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.filter-select {
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  overflow-y: auto;
}

.filter-select option {
  padding: 8px;
}

.filter-select option:hover {
  background-color: #007bff;
  color: #fff;
}

.filter-select option:checked {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
</style>
