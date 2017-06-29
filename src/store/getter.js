/**
 * Created by ml620 on 2017/6/19 0019.
 */

export  default {
    hq_all_banana:(state)=>{
        try {
            let sum;
            sum = state.rotten_banana + state.fresh_banana + state.green_banana;
            return sum
        } catch (err) {
            console.log(err)
        }
    },
}
