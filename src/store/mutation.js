/**
 * Created by ml620 on 2017/6/19 0019.
 */
import * as types from './mutation_types'

export default {
    [types.HQ_ENTRY_FRESH] (state, count) {
        try {
           state.fresh_banana += count
        } catch (err) {
            console.log(err)
        }
    },
    [types.HQ_ENTRY_GREEN] (state, count) {

        try {
            console.log(count);
            state.green_banana += count*1
        } catch (err) {
            console.log(err)
        }
    },
    [types.HQ_ENTRY_ROTTEN] (state, num) {
        try {
            state.rotten_banana += num
        } catch (err) {
            console.log(err)
        }
    },
    [types.HQ_DELIVERY_FRESH] (state, num) {
        try {
            state.fresh_banana -= num
        } catch (err) {
            console.log(err)
        }
    },
    [types.HQ_DELIVERY_GREEN] (state, num) {
        try {
            state.green_banana -= num
        } catch (err) {
            console.log(err)
        }
    },
    [types.HQ_DELIVERY_ROTTEN] (state, num) {
        try {
            state.rotten_banana -= num
        } catch (err) {
            console.log(err)
        }
    },
};
