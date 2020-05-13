import Vue from 'vue'
import Vuex from 'vuex'
import server from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 5,
    articles: [],
    isLogin: false
  },
  mutations: {
    SET_COUNT (state, payload) {
      state.count += payload
    },
    SET_ARTICLES (state, payload) {
      state.articles = payload
    },
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    getAllPosts ({ commit }) {
      return server.get('/posts')
        .then(({ data }) => {
          commit('SET_ARTICLES', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    signIn ({ commit }) {
      return server.get('/users')
    }
  },
  getters: {
    readYetArticle (state) {
      return state.articles.filter(el => el.readStatus === false)
    }
  }
})

export default store
