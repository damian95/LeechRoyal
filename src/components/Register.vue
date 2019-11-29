<template>
  <v-dialog v-model="show" persistent max-width="650px">
    <v-card>
      <v-card-title class="headline">REGISTER</v-card-title>
      <v-card-text>
        <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email" hint="Email" required v-model.trim="account.email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Username" hint="Username" required v-model.trim="account.username"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password" hint="Password" required v-model.trim="account.password"></v-text-field>
              </v-col>              
            </v-row>
          </v-container>          
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('clickExistingUser')">EXISTING USER</v-btn>        
        <v-btn color="accent" @click="$emit('clickRegister')">REGISTER</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: {
        show: Boolean
    },
    computed: {
        ...mapGetters(["account"])
    }   
};
</script>

<style>
</style>