
export const state = () => ({
  users: [],
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  addUser(state, user) {
    state.users.push(user);
  },
  updateUser(state, updatedUser) {
    const index = state.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser);
    }
  },
  deleteUser(state, userId) {
    state.users = state.users.filter(user => user.id !== userId);
  },
};

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await this.$axios.$get('/users');
      commit("setUsers", response);
    } catch (error) {
      console.error(error);
    }
  },
  async addUser({ commit }, user) {
    try {
      const response = await this.$axios.$post('/users', user);
      commit("addUser", response);
    } catch (error) {
      console.error(error);
    }
  },
  async updateUser({ commit }, updatedUser) {
    try {
      const response = await this.$axios.$put(`/users/${updatedUser.userId}`, updatedUser);
      commit("updateUser", response);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteUser({ commit }, userId) {
    try {
      await this.$axios.$delete(`/users/${userId}`);
      commit("deleteUser", userId);
    } catch (error) {
      console.error(error);
    }
  },
};


export const getters = {
	getUsers: state => state.users ,
  getUserById: (state) => (id) => {
	  return state.users.find(user => user.userId === id);
	}
};