/**
 * Created by ml620 on 2017/6/19 0019.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    fresh_banana:50,
    green_banana:50,
    rotten_banana:50
};

import mutations from  './mutation'
import actions from  './action'
import getters from './getter'



export default new Vuex.Store({
    namespaced: true,
    state,
    actions,
    mutations,
    getters
})
