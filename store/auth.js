export const state = () => ({
  tkn: null,
});
export const actions = {
  checkTkn(context) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("tkn")) {
        context.commit("toggleAuth", localStorage.getItem("tkn"));
        return true;
      } else {
        context.commit("toggleAuth", false);
      }
    }
  },
  changeAuth(context, statusAuth) {
    context.commit("toggleAuth", statusAuth);
  },
};
export const mutations = {
  toggleAuth(state, tkn) {
    state.tkn = tkn;
  },
};
export const getters = {
  checkAuth(state) {
    if (state.tkn) {
      return state.tkn;
    } else return false;
  },
};
