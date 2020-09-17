import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'seeBoard', component: r => { require(['./components/SeeBoard'], r) }, meta: { title: '资讯看盘' }},
    { path: '/seeBoard', name: 'seeBoard', component: r => { require(['./components/SeeBoard'], r) }, meta: { title: '资讯看盘' }},
    // { path: '/helloWorld', name: 'helloWorld', component: r => { require(['../../components/HelloWorld'], r) }, meta: { title: '哈喽world' }},
]

export default new VueRouter({
    routes: routes
})