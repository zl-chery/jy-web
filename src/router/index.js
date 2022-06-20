import Vue from 'vue';
import VueRouter from 'vue-router'

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const HomePage = () => import('../components/HomePage.vue')
const Game = () => import('../components/Game.vue')
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

export default new VueRouter({
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
            component: Game
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
            name: 'toolStore',
            component: ToolStore,
            children: [
                { path: '', redirect: 'AllCard' },
                { 
                    path: 'AllCard', 
                    name: 'AllCard', 
                    component:  () => import('../components/toolstore/AllCard.vue')
                },
                { 
                    path: 'SecondCard',
                    name: 'SecondCard',  
                    component: () => import('../components/toolstore/SecondCard.vue')
                },
                { 
                    path: 'VipCard',
                    name: 'VipCard',
                    component: () => import('../components/toolstore/VipCard.vue')
                },
                { 
                    path: 'HDCard',
                    name: 'HDCard',
                    component: () => import('../components/toolstore/HDCard.vue')
                },
            ]
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
                {
                    path: '', 
                    name: 'gamePoolIndex',
                    redirect: 'gameRecommend' },
                { 
                    path: 'gameRecommend', 
                    name: 'gameRecommend', 
                    component: GameRecommend },
                { 
                    path: 'gameCreateHome',
                    name: 'gameRoom',  
                    component: GameCreateHome },
                { 
                    path: 'gameSort',
                    name: 'gameSort',
                    component: GameSort },
                { 
                    path: 'gameTrading',
                    name: 'gameTrading',
                    component: GameTrading },
                { 
                    path: 'GameStrategy',
                    name: 'gameStrategy',
                    component: GameStrategy },
            ]
        },
        {
            path: '/personCenter',  //个人中心
            component: () => import('../components/PersonCenter.vue'),
            children: [
                { path: '', redirect: 'VIP' },
                {
                    path: 'VIP',
                    component: () => import('../components/person/vipCenter.vue')
                },
                {
                    path: 'Hobby',
                    component: () => import('../components/person/hobby.vue'),
                },
                {
                    path: 'Package',
                    component: () => import('../components/person/myPackage.vue'),
                    children: [
                        {
                            path: '',
                            redirect: 'CardNoUse'
                        },
                        {
                            path: 'CardNoUse',
                            component: () => import('../components/cardpackage/CardNoUse.vue'),
                        },
                        {
                            path: 'CardUsed',
                            component: () => import('../components/cardpackage/CardUsed.vue'),
                        },
                        {
                            path: 'CardExp',
                            component: () => import('../components/cardpackage/CardExp.vue'),
                        }
                    ],
                },
                {
                    path: 'Assets',
                    component: () => import('../components/person/assets.vue'),
                    children: [
                        {
                            path: '',
                            redirect: 'AllAssets'
                        },
                        {
                            path: 'AllAssets',
                            component: () => import('../components/person/AssetsCom/AllAssets.vue'),
                        },
                        {
                            path: 'DiamondAssets',
                            component: () => import('../components/person/AssetsCom/DiamondAssets.vue'),
                        },
                        {
                            path: 'CoinAssets',
                            component: () => import('../components/person/AssetsCom/CoinAssets.vue'),
                        }
                    ],
                },
                {
                    path: 'HelpAndReview',
                    component: () => import('../components/person/helpAndReview.vue')
                },
                {
                    path: 'Message',
                    component: () => import('../components/person/message.vue')
                },
                {
                    path: 'AccountSafe',
                    component: () => import('../components/person/accountSafe.vue')
                },
            ]
        },
        {
            path: '/recentlyPlayed',
            component: RecentlyPlayed
        },
        {
            path: '/constCommonQa',
            component: constCommonQa
        },
    ],
    // mode: 'history'
})