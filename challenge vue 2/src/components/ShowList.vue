<template>
  <div class="container">
    <div v-for="(show, index) in shows" :key="index">
      <div class="card">
        <img :src="show.image" alt="image" />
        <h1>{{ show.name }}</h1>
        <p class="type">{{ show.type }}</p>
        <p>Network: {{ show.network }}</p>
        <p><button @click="openOfficialSite(show.officialSite)" v-if="show.officialSite">Official Site</button></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getShowsByPage } from "@/services/ShowsService.js";
export default {
  name: "ShowList",
  data() {
    return {
      shows: [],
    };
  },
  async mounted() {
    this.shows = await getShowsByPage(1);
  },
  methods: {
    openOfficialSite(url) {
      window.open(url, "_blank");
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
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 80%;
  margin: auto;
  text-align: center;
  font-family: arial;
  background-color: white;
  padding-top: 10px;
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
