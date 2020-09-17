/**
*
* @author yqf
* @date created in 2020-08-2 22:48
*/
<template>
    <div id="newsBoard" v-wechat-title="$route.meta.title">
        <div class="newsWrapper">
            <div class="menu">
                <ul class="menuUl">
                    <li v-for="item in menuData" :key="item.key">{{item.value}}</li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "newsBoard",
        data() {
            return {
                
            }
        },
        mounted() {
            // console.log('menuData是个什么', this.menuData)
        },
        methods: {

        },
        computed: {
            ...mapState({
                menuData: state => state.menu.menuData
            }),
        }
    }
</script>

<style scoped>
    @import '../../assets/css/common.css';
    #newsBoard {
        width: 100%;
        height: 100%;
    }
    .newsWrapper {
        height: 100%;
        display: flex;
        display: -webkit-flex;
    }
    .newsWrapper .menu {
        width: 7rem;
        height: 100%;
        background-color: #14171B;
    }
    .menuUl {
        margin: 0 0.9rem;
        text-align: center;
    }
    .menuUl li {
        border-bottom: 1px solid #2F333B;
        font-size: 1.3rem;
        line-height: 1.4rem;
        padding: 1.8rem 0;
        color: #D8DFEB;
    }
    .newsWrapper .content {
        flex: 1;
        -webkit-flex: 1;
        height: 100%;
        background: #101012;
    }
</style>