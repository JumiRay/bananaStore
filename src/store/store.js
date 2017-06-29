/**
 * Created by ml620 on 2017/6/7 0007.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import xuhui from './modules/xuhui/store'

Vue.use(Vuex);

const state = {
    fresh_banana:100,
    green_banana:100,
    rotten_banana:100
};

import mutations from  './mutation'
import actions from  './action'
import getters from './getter'



const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        xuhui
    },
    strict: debug,
    middlewares: debug ? [] : []
})
