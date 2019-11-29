<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Home/>
      <Login @clickLogin="login" @clickRegister="showRegisterDialog()" :show="showLogin"/>
      <Regsiter @clickRegister="register" @clickExistingUser="showLoginDialog()" :show="showRegister" />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Home from './components/Home';
import Login from './components/Login';
import Regsiter from './components/Register';

export default {
  name: 'App',

  components: {
    Home,
    Login,
    Regsiter
  },
  data: () => ({
    showRegister: false
  }),  
  computed: {
    ...mapGetters(["loggedIn"]),
    showLogin: function(){
      return (!this.loggedIn && !this.showRegister) 
    }
  },  
  methods: {
    ...mapActions(["login", "register"]),
    showRegisterDialog(){
      this.showRegister = true;
    },
    showLoginDialog(){
      this.showRegister = false;
    }
  }
};
</script>
