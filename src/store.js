import { createStore } from 'vuex'

export default createStore({
    state: {
        profile: {},
        isAuthenticated: false
    },
    mutations: {
        setProfile(state, profile) {
            state.profile = profile
        },
        setIsAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        }
    },
    actions: {
        setProfile({ commit }, profile) {
            commit('setProfile', profile)
        },
        setIsAuthenticated({ commit }, isAuthenticated) {
            commit('setIsAuthenticated', isAuthenticated)
        }
    }
})
