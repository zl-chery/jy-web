const PERSON = {
    'register': {
        url: 'my/users/emailRegister',
        method: 'POST',
        // rsaKey: 'password',
        // setToken: true,
    },
    'emailLogin': {
        url: 'my/users/emailLogin',
        method: 'POST',
        // rsaKey: 'password',
        setToken: true,
    },
    'sendEmail': {
        url: 'my/users/sendEmail',
        method: 'POST',
    },
    'sendSmsCode': {
        url: 'rt/api/user/sendSmsCode',
        method: 'POST',
    },
    'phoneLogin': {
        url: 'my/users/phoneLogin',
        method: 'POST',
        setToken: true,
    },
    'thirdAuth': {
        url: 'my/users/thirdAuth',
        method: 'POST',
    },
    'usersAccount': {
        url: 'my/users/account',
        method: 'POST',
    },
    'userInfo': {
        url: 'rt/api/user/info',
        method: 'POST',
    },
    'headimgChange': {
        url: 'rt/api/user/headimgChange',
        method: 'POST',
    },
    'modifyUser': {
        url: 'rt/api/user/modifyUser',
        method: 'POST',
        setToken: true,
    },
    'memberList': {
        url: 'my/api/member/list',
        method: 'POST',
    },
    'gameRecord': {
        url: 'my/api/game/record',
        method: 'GET',
    },
    'gameCollect': {
        url: 'my/api/game/collect',
        method: 'GET',
    },
    'cardPackage': {
        url: 'my/api/card/package',
        method: 'GET',
    },
    'cardEnable': {
        url: 'my/api/card/enable',
        method: 'POST',
    },
    'assetRecord': {
        url: 'my/userGame/assetRecord',
        method: 'GET',
    },
    'notify': {
        url: 'my/message/notify',
        method: 'GET',
    },
    'coinsBuy': {
        url: 'my/order/member/buy',
        method: 'POST',
    },
    'moneyBuy': {
        url: 'my/order/member/money',
        method: 'POST',
    },


}

export default PERSON