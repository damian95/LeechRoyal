import Vuex from "vuex";
import Vue from "vue";
import account from "./modules/account";
import post from "./modules/post";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account,
        post
    }
});