export const state = () => ({
  users: [],
});

export const actions = {
  async fetchUsers(context, url) {
      const response = await fetch(url);
      let data = await response.json();
      context.commit("setUsers", data);
  },
};
export const getters = {
  getUsers: (state) => state.users,
  getCurrentUser: (state) => (id) => {
    return state.users.find((user) => user.id === id);
  },
};
export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};
