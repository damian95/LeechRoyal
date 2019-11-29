class account {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.confirmPassword = "";
        this.token = "";
        this.authenticated = false;
        this.roles = [];
    }
}

const state = {
    account: new account("", "", "", "")
};

const getters = {
    account: state => state.account,
    roles: state => state.account.roles,
    loggedIn(state) {
        return !!state.account.authenticated;
    }
};

const actions = {
    async login ({commit, dispatch}){
        commit("LOGIN_TEMP");
        dispatch("getPosts", 'B');
    },
    async register ({commit}){
        commit("REGISTER_TEMP");
    }
    // async login({ commit, dispatch }) {
    //     await this.$axios.post("/accounts/login", state.account)
    //         .then(function (response) {
    //             commit("SET_USER_TOKEN", response.data.token);
    //             commit("SET_USER_ROLES", response.data.roles);
    //         })
    //         .catch(function (error) {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 dispatch("addNotification", { msg: "Invalid Id Or Password", type: "error" });
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 dispatch("addNotification", { msg: "Failed To login", type: "error" });
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 dispatch("addNotification", { msg: "Failed To Contact Server", type: "error" });
    //             }
    //         });
    // }
};

const mutations = {
    LOGIN_TEMP(state){
        state.account.authenticated = true;
        localStorage.setItem("user", JSON.stringify(state.account));
    },
    REGISTER_TEMP(state){
        state.account.authenticated = true;
        localStorage.setItem("user", JSON.stringify(state.account));
    },
    SET_USER_TOKEN(state, token) {
        state.account.token = token;
        state.account.authenticated = true;
        localStorage.setItem("user", JSON.stringify(state.account));
        this.$axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    },
    SET_USER_ROLES(state, roles){
        state.account.roles = roles;
    },
    CLEAR_USER_DATA(state) {
        state.account = new account("", "", "", "");
        localStorage.removeItem("user");
        this.$axios.defaults.headers.common["authorization"] = null;
    }    
};

export default {
    state,
    getters,
    actions,
    mutations
};