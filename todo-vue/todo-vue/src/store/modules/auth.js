// state : data와 유사
const state = {
  token: null
}
// mutations : state를 변화하기 위한 함수(method)
const mutations = {
  // 첫번째 인자는 state
  // 이후 인자는 payload(즉, 임의의 매개변수)
  setToken(state, token) {
    state.token = token
  }
}

const actions = {
  // 첫번재 인자는 context(다양한)
  // 이후 인자는 payload(임의의 매개 변수)
  login(context, token) {
    // mutation 호출
    context.commit('setToken', token)
  },
  logout(context) {
      context.commit('setToken', null)
  }
}
import jwtDecode from 'jwt-decode'
const getters = {
  options(state) {
    return {
      headers: {
        Authorization : `JWT ${state.token}`
      }
    }
  },
  user(state) {
      return jwtDecode(state.token).user_id
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}