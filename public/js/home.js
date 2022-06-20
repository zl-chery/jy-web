// 首页
import request from '@/common/request'

export function getHomeData() {
    return request({
        url: '/my/pages/navDetail',
        method: 'post',
        data: {
            nav_name: '铠甲安卓游戏首页',
        }
    })
}

/**
 * 排行榜
 * @param {int} type 类型(1.热门 2.新游 3.高分)默认1
 */
export function getRankingList(type) {
    return request({
        url: '/my/api/rank/list',
        method: 'post',
        data: {
            type,
        }
    })
}
//用户账户金
export function AccountInfo() {
    return request({
        url: '/my/users/account',
        method: 'post',
        
    })
}
//vip游戏列表
export function vipArea() {
    return request({
        url: '/my/pages/navDetail',
        method: 'post',
        data: {
            nav_name: '铠甲会员游戏',
        }
    })
}
//获取是否有消息
export function letterNotice() {
    return request({
        url: '/my/message/unread',
        method: 'post',
    })
}
//领取奖励
// export function receiverRewards() {
//     return request({
//         url: '/my/api/sign/loginFreeTime',
//         method: 'post',
//     })
// }
/**
 * 首页公告
 */
export function messageHome({isShowLoading=false,isHiddenLoading=false}={}) {
    return request({
        url: '/my/message/home',
        method: 'post',
		isShowLoading,
		isHiddenLoading,
    })
}