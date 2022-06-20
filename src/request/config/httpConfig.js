
import Person from './person'

const REQUEST_MAP = {
  ...Person,
  'index': {
    url: '/index',
    method: 'GET',
    noMessage: true
  },
  'vipGamePool': {
    url: '/game/gameList',
    method: 'POST',
  },
  'pubKey': {
    url: '/keys',
    method: 'GET'
  },
  'articles': {
    url: '/api/rest/articles',
    method: 'GET'
  },
  'columns': {
    url: '/api/rest/columns',
    method: 'GET'
  },
  'postColumn': {
    url: '/api/rest/columns',
    method: 'POST'
  },
  'postComment': {
    url: '/api/rest/comments',
    method: 'POST'
  },
  'postArticle': {
    url: '/api/rest/articles',
    method: 'POST'
  },
  'getArticleById': {
    rest: true,
    url: '/api/rest/articles/:id',
    method: 'GET'
  },
  'uploadArticle': {
    url: '/upload/article',
    method: 'POST'
  }
}

export default REQUEST_MAP