/**
 * Created by ml620 on 2017/6/19 0019.
 */
import * as types from '../../mutation_types'

export default {
    [types.XH_ENTRY_FRESH] (state, count) {
        try {
            state.fresh_banana += count
        } catch (err) {
            console.log(err)
        }
    },
    [types.XH_ENTRY_GREEN] (state, count) {

        try {
            console.log(count);
            state.green_banana += count
        } catch (err) {
            console.log(err)
        }
    },
    [types.XH_ENTRY_ROTTEN] (state, count) {
        try {
            state.rotten_banana += count
        } catch (err) {
            console.log(err)
        }
    },
    [types.XH_DELIVERY_FRESH] (state, count) {
        try {
            state.fresh_banana -= count
        } catch (err) {
            console.log(err)
        }
    },
    [types.XH_DELIVERY_GREEN] (state, count) {
        try {
            state.green_banana -= count
        } catch (err) {
            console.log(err)
        }
    },
    [types.XH_DELIVERY_ROTTEN] (state, count) {
        try {
            state.rotten_banana -= count
        } catch (err) {
            console.log(err)
        }
    },
};
