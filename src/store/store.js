import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        authentication: localStorage.getItem("token")
    },

    getters: {
       getAuthentication: state => {
           return state.authentication;
       }
    },

    mutations: {
        logout(state) {
            localStorage.clear();
            state.authentication = ""
        },
        login(state) {
            state.authentication = localStorage.getItem("token");
        }
    },

    actions: {

    }
})