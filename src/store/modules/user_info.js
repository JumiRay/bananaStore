/**
 * Created by ml620 on 2017/6/7 0007.
 */

import {
    SET_BASEINFO
} from '../mutation_types'

const state = {
    userIfo:{
        status: 0,
        mobile: '',
        name: '',
        headimg: '',
    }
};

const mutations = {
    [SET_BASEINFO] (state, data) {
        try {
            state.userIfo.status = data.status;
            state.userIfo.mobile = data.data.mobile;
            state.userIfo.name = data.data.name;
            state.userIfo.headimg = data.data.headimg;
        } catch (err) {
            console.log(err)
        }
    }
};

import * as actions from '../actions/user_actions'

export default {
    namespaced: true,
    actions,
    state,
    mutations
}
