<template>
  <v-tabs centered grow>
    <v-tab @click="tabChange('B')">Buy</v-tab>
    <v-tab @click="tabChange('S')">Sell</v-tab>
    <v-tab @click="tabChange('P')">Partner</v-tab>

    <v-tab-item>
      <Buy />
    </v-tab-item>
    <v-tab-item>
      <Sell />
    </v-tab-item>
    <v-tab-item>
      <Partner />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapActions } from 'vuex';
import Buy from './Buy';
import Sell from './Sell';
import Partner from './Partner';

export default{
  components: {
    Buy,
    Sell,
    Partner
  },
  methods: {
    ...mapActions(["getPosts"]),
    tabChange(type) {
      this.getPosts(type);
    }
  }
}
</script>

<style>
</style>