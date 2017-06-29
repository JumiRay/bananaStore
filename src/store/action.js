/**
 * Created by ml620 on 2017/6/19 0019.
 */
import * as types from './mutation_types'


export  default {
    hq_enter: ({commit}, enter_object) => {
        try {
            if (enter_object.type === 'fresh') {
                commit(types.HQ_ENTRY_FRESH, enter_object.count)
            } else if (enter_object.type === 'green') {
                commit(types.HQ_ENTRY_GREEN, enter_object.count)
            } else if (enter_object.type === 'rotten') {
                commit(types.HQ_ENTRY_ROTTEN, enter_object.count)
            }
        } catch (err) {
            console.log(err)
        }
    },
    hq_delivery: ({commit, state}, delivery_object) => {
        try {
            if (delivery_object.type === 'fresh') {
                if (state.fresh_banana > delivery_object.count) {
                    commit(types.HQ_DELIVERY_FRESH, delivery_object.count)
                } else {
                    alert('并没有那么多货')
                }
            } else if (delivery_object.type === 'green') {
                if (state.green_banana > delivery_object.count) {
                    commit(types.HQ_DELIVERY_GREEN, delivery_object.count)
                } else {
                    alert('并没有这么多货')
                }
            } else if (delivery_object.type === 'rotten') {
                if (state.rotten_banana > delivery_object.count) {
                    commit(types.HQ_DELIVERY_ROTTEN, delivery_object.count)
                } else {
                    alert('并没有这么多货')
                }
            }
        } catch (err) {
            console.log(err)
        }
    },

}
