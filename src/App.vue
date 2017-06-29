<template>
    <div id="app">
        <img src="./assets/images/logo.png">

        <router-view></router-view>
    </div>
</template>

<script>
    import store from './store/store'
    import {mapActions, mapState} from  'vuex'
    export default {
        store,
        name: 'app',
        beforeCreate(){
            //store._actions["api/setApi"][0]()
        },
        computed:{
            ...mapState({
                //api :state => state.api
            })
        },
        methods:{
            ...mapActions({
                //setApi:'api/setApi'
            })
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
