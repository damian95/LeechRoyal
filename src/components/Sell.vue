<template>
  <v-data-table :headers="headers" :items="displayList" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white" height="110px">
        <v-row>
            <v-col cols="4">
                <v-select outlined label="Leech Type" v-model="leech" :items="leeches" @change="setDisplayList()"></v-select>
            </v-col>
            <v-col cols="7"/>
            <v-col cols="1">
                <NewPost type="S"/>
            </v-col>
        </v-row>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn color="secondary" dark class="mb-2">SELL</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import NewPost from "./NewPost";

export default {
  components: {
    NewPost
  },
  data: () => ({
    headers: [
      { text: "Character Name", sortable: false, value: "characterName" },
      { text: "Character Level", value: "characterLevel" },
      { text: "Leech Type", value: "leechType" },
      { text: "Price", value: "price" },
      { text: "", value: "action" }
    ],
    leeches: [
      { text: "All", value: "" },
      { text: "Jr Wraiths(30 -36)", value: "Jr Wraiths" },
      { text: "Platoon Chronos(36-41)", value: "Platoon Chronos" },
      { text: "Master Chronos(41-43)", value: "Master Chronos" },
      { text: "Wraith(43-51)", value: "Wraith" },
      { text: "Muddy Banks 1(51-56)", value: "Muddy Banks 1" },
      { text: "Muddy Banks 2(56-65)", value: "Muddy Banks 2" },
      { text: "WindRaider​(65-67)", value: "WindRaider" },
      { text: "Froscola & Jester Scarlion(67-75)", value: "Froscola & Jester Scarlion" },
      { text: "StormBreaker(75-78)", value: "StormBreaker" },
      { text: "Harpies(78-85)", value: "Harpies" },
      { text: "Ulu 1(85-90)", value: "Ulu 1" },
      { text: "Ulu 2(90-105)", value: "Ulu 2" },
      { text: "Petri(105+)", value: "Petri" },
      { text: "Skele(108+)", value: "Skele" }
    ],
    leech: "",
    displayList: []
  }),
  computed: {
    ...mapGetters(["posts"])
  },
  methods: {
    setDisplayList() {
      this.displayList = this.leech
        ? this.posts.filter(post => post.leechType == this.leech)
        : this.posts;
    }
  },
  watch: {
    posts() {
      this.setDisplayList();
    }
  }
};
</script>

<style>
</style>