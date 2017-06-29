/**
 * Created by ml620 on 2017/6/9 0009.
 */

import {
    SET_API
} from '../mutation_types';

import * as actions from  '../actions/api_action'

const state = {
    api:{}
};


const mutations = {
    [SET_API] (state, data) {
        try {
            state.api = data
        } catch (err) {
            console.log(err)
        }
    }
};



export default {
    namespaced: true,
    actions,
    state,
    mutations
}
