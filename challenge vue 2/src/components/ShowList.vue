<template>
  <div class="container">
    <div class="filtered-list">
      <ShowFilteredList
        :options="allGenres"
        filterLabel="Géneros"
        @filter="applyGenreFilter"
      />
    </div>
    <div v-for="(show, index) in filteredShows" :key="index">
      <div class="card">
        <img style="width: 25%;" :src="show.image" alt="image" />
        <div style="width: 50%;">
          <h1>{{ show.name }}</h1>
          <p class="type">{{ show.type }}</p>
          <p>Network: {{ show.network }}</p>
        </div>
      </div>
      <button
        @click="openOfficialSite(show.officialSite)"
        v-if="show.officialSite"
      >
        Official Site
      </button>
    </div>
  </div>
</template>

<script>
import { getShowsByPage } from "@/services/ShowsService.js";
import ShowFilteredList from "./ShowFilteredList.vue";

export default {
  name: "ShowList",
  components: {
    ShowFilteredList,
  },
  data() {
    return {
      shows: [],
      selectedGenres: [],
    };
  },
  computed: {
    filteredShows() {
      return this.shows.filter((show) => {
        const matchesGenre =
          this.selectedGenres.length === 0 ||
          this.selectedGenres.some((genre) => show.genres.includes(genre));
        return matchesGenre;
      });
    },
    allGenres() {
      const genresSet = new Set();
      this.shows.forEach((show) =>
        show.genres.forEach((genre) => genresSet.add(genre))
      );
      return Array.from(genresSet);
    },
  },
  async mounted() {
    this.shows = await getShowsByPage(1);
  },
  methods: {
    openOfficialSite(url) {
      window.open(url, "_blank");
    },
    applyGenreFilter(selectedGenres) {
      this.selectedGenres = selectedGenres;
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  background-color: lightgray;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding-top: 15px;
  justify-content: center;
}
.filtered-list {
  display: flex;
  justify-content: center;
  width: 100%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: arial;
  background-color: white;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-bottom: 4px solid white;
}

.type {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  max-width: 400px;
}

img {
  width: 100px;
  height: auto;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
