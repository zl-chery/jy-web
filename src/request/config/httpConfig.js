const REQUEST_MAP = {
  'homePage': {
    url: '/pages/navDetail',
    method: 'POST',
  },
  'ranking': {
    url: '/api/rank/list',
    method: 'POST'
  },
  'gamePool': {
    url: '/game/gameList',
    method: 'POST',
  },
  'gamePoolInfo': {
    url: '/pages/gameDetail',
    method: 'POST',
  },
  'comment': {
    url: '/api/game/commentlist',
    method: 'POST',
  },
  'roomInfo': {
    url: '/room/roomList',
    method: 'POST',
  },
  'gameStrategy': {
    url: '/game/walkthroughList',
    method: 'POST'
  },
  'gameSimilar': {
    url: '/game/similar',
    method: 'POST'
  },
  'cardList': {
    url: '/api/card/list',
    method: 'POST'
  },
  'vipCardList': {
    url: '/api/member/list',
    method: 'POST'
  },
  'tagList': {
    url: '/game/labels',
    method: 'POST'
  }
}

export default REQUEST_MAP