import Vue from 'vue';
import VueRouter from 'vue-router'

import Cookies from 'js-cookie'

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const HomePage = () => import('../components/HomePage.vue')
const History = () => import('../components/History.vue')
const VipGame = () => import('../components/VipGame.vue')
// const PlayTogether = () => import('../components/PlayTogether.vue')
const Remoto = () => import('../components/remoto.vue')
const ToolStore = () => import('../components/toolStore.vue')
const LoadApp = () => import('../components/LoadApp.vue')

const GamePool = () => import('../components/GamePool.vue')
const GameRecommend = () => import('../components/gamepool/GameRecommend.vue')
const GameSort = () => import('../components/gamepool/GameSort.vue')
const GameTrading = () => import('../components/gamepool/GameTrading.vue')
const GameCreateHome = () => import('../components/gamepool/GameCreateHome.vue')
const GameStrategy = () => import('../components/gamepool/GameStrategy.vue')

//最近玩过
const RecentlyPlayed = () => import('../components/qa/RecentlyPlayed.vue')
//常见问题
const constCommonQa = () => import('../components/qa/CommonQA.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomePage
        },
        {
            path: '/history',
            component: History
        },
        {
            path: '/vipGame',
            component: VipGame
        },
        // {
        //     path: '/playTogether',
        //     component: PlayTogether
        // },
        {
            path: '/remoto',
            component: Remoto
        },
        {
            path: '/toolStore',
            component: ToolStore
        },
        {
            path: '/loadApp',
            component: LoadApp
        },
        {
            path: '/gamePool',
            name: 'gamePool',
            component: GamePool,
            children: [
                { path: '', redirect: 'gameRecommend' },
                { path: 'gameRecommend', component: GameRecommend },
                { path: 'gameCreateHome', component: GameCreateHome },
                { path: 'gameSort', component: GameSort },
                { path: 'gameTrading', component: GameTrading },
                { path: 'GameStrategy', component: GameStrategy },
            ]
        },
        {
            path: '/personCenter',  //个人中心
            component: () => import('../components/PersonCenter.vue'),
            children: [
                { path: '', redirect: 'VIP' },
                {
                    path: 'VIP',
                    component: () => import('../components/person/vipCenter.vue'),
                    meta: { isAuth: true },
                },
                {
                    path: 'Hobby',
                    component: () => import('../components/person/hobby.vue'),
                    meta: { isAuth: true },
                    children: [
                        {
                            path: '',
                            redirect: 'gameRecord'
                        },
                        {
                            path: 'gameRecord',
                            component: () => import('../components/person/HobbyCom/GameRecord.vue'),
                            meta: { isAuth: true },
                        },
                        {
                            path: 'gameCollect',
                            component: () => import('../components/person/HobbyCom/GameCollect.vue'),
                            meta: { isAuth: true },
                        },
                    ]
                },
                {
                    path: 'Package',
                    component: () => import('../components/person/myPackage.vue'),
                    meta: { isAuth: true },
                    children: [
                        {
                            path: '',
                            redirect: 'CardNoUse'
                        },
                        {
                            path: 'CardNoUse',
                            component: () => import('../components/cardpackage/CardNoUse.vue'),
                            meta: { isAuth: true },
                        },
                        {
                            path: 'CardUsed',
                            component: () => import('../components/cardpackage/CardUsed.vue'),
                            meta: { isAuth: true },
                        },
                        {
                            path: 'CardExp',
                            component: () => import('../components/cardpackage/CardExp.vue'),
                            meta: { isAuth: true },
                        }
                    ],
                },
                {
                    path: 'Assets',
                    component: () => import('../components/person/assets.vue'),
                    meta: { isAuth: true },
                },
                {
                    path: 'HelpAndReview',
                    component: () => import('../components/person/helpAndReview.vue'),
                    meta: { isAuth: true },
                },
                {
                    path: 'Message',
                    component: () => import('../components/person/message.vue'),
                    meta: { isAuth: true },
                },
                {
                    path: 'AccountSafe',
                    component: () => import('../components/person/accountSafe.vue'),
                    meta: { isAuth: true },
                },
            ],
            meta: { isAuth: true },
        },
        {
            path: '/recentlyPlayed',
            component: RecentlyPlayed,
            meta: { isAuth: true }
        },
        {
            path: '/constCommonQa',
            component: constCommonQa
        },
    ],
    // mode: 'history'
})

router.beforeEach((to, from, next) => {
    // console.log(to, from)
    if (to.meta.isAuth) {
        // console.log(Cookies.get('as_user_token'));
        if (Cookies.get('as_user_token'))
            next()
        else {
            alert('您没有登录')
            router.push('/home')
        }

    } else
        next()
})

export default router