import Vue from 'vue'
import Vuex from 'vuex'
import category from './category';
import cardsCategory from "./cardsCategory"
Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        category,
        cardsCategory,
    }
})

