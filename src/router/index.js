import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello.vue'
import xuhui from '@/components/xuhui/xuhui.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/xh',
            name: 'xuhui',
            component: xuhui
        }
    ]
})
