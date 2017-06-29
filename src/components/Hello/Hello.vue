<template>
    <div class="hello">
        <h1>上海香蕉总仓库</h1>
        <div class="box">
            <table>
                <tr>
                    <th>香蕉品种</th>
                    <th>数量</th>
                </tr>
                <tr>
                    <td>绿香蕉</td>
                    <td>{{green_banana}}</td>
                </tr>
                <tr>
                    <td>熟香蕉</td>
                    <td>{{fresh_banana}}</td>
                </tr>
                <tr>
                    <td>烂香蕉</td>
                    <td>{{rotten_banana}}</td>
                </tr>
                <tr>
                    <td>总计</td>
                    <td>{{hq_all_banana}}</td>
                </tr>
            </table>
        </div>
        <div>
            <h3>入库</h3>
            <select name="enter" v-model="enter_type">
                <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <input type="number" v-model="enter_num">
            <input type="button" value="入库" @click="enter()">
            <h3>发货</h3>
            <select name="delivery" v-model="delivery_type">
                <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <input type="number" v-model="delivery_num">
            <input type="button" value="发货" @click="delivery()">

        </div>

        <router-link class="xuhui-link" :to="{path:'xh'}">管理徐汇子仓库</router-link>

    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex';
    export default {
        data(){
            return {
                enter_type: 'green',
                delivery_type: 'green',
                enter_num: 0,
                delivery_num: 0,
                options: [
                    {text: '绿香蕉', value: 'green'},
                    {text: '熟香蕉', value: 'fresh'},
                    {text: '烂香蕉', value: 'rotten'}
                ]

            }
        },
        computed: {
            ...mapState([
                'fresh_banana',
                'green_banana',
                'rotten_banana',
            ]),
            ...mapGetters([
                'hq_all_banana',
            ])
        },
        methods: {
            ...mapActions([
                'hq_enter',
                'hq_delivery'
            ]),
            delivery(){
                if (this.delivery_num > 0) {
                    this.hq_delivery({
                        type: this.delivery_type,
                        count: parseInt(this.delivery_num),
                    })
                } else {
                    alert('快去填发货数量。。。')
                }
            },
            enter(){
                this.hq_enter({
                    type: this.enter_type,
                    count: parseInt(this.enter_num),
                })
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .hello {
        display: block;
        margin: 20px auto;
        text-align: center;
        width: 960px;
        table {
            border: 1px solid #976d31;
            display: inline-block;
            th {
                background: #976d31;
                color: #fff;
                width: 200px;
            }
            tr {
                background: #f0d054;
                color: #fff;
            }
        }
        .xuhui-link{
            display: block;
            margin-top: 40px;
            font-size: 20px;
        }
    }
</style>
