<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="accent" dark class="mb-2" v-on="on">New Post</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">New Post</v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Character Name" hint="Username" required v-model.trim="post.characterName"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select label="Class" :items="classes" v-model.trim="post.characterClass"></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Level" type="number" v-model.trim="post.characterLevel"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select label="Leech" :items="leeches" v-model.trim="post.leechType"></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Price(Million)" type="number" v-model.trim="post.price"></v-text-field>
            </v-col>            
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="newPost()">Post</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    classes: [
      'Bishop',
      'F/P Mage',
      'I/L Mage'
    ],
    leeches: [
      'Jr Wraiths(30 -36)',
      'Platoon Chronos(36-41)',
      'Master Chronos(41-43)',
      'Wraith(43-51)',
      'Muddy Banks 1(51-56)',
      'Muddy Banks 2(56-65)',
      'WindRaider​(65-67)',
      'Froscola & Jester Scarlion(67-75)',
      'StormBreaker(75-78)',
      'Harpies(78-85)',
      'Ulu1(85-90)',
      'Ulu2(90-105)',
      'Petri(105+)',
      'Skele(108+)'
    ]
  }),
  computed: {
    ...mapGetters(["post"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  props: {
    type: String
  },
  methods: {
    ...mapActions(["createPost"]),
    newPost() {
      this.createPost();
      this.dialog = false;
    },
    closeDialog(){
      this.dialog = false;
    }       
  }
};
</script>

<style>
</style>