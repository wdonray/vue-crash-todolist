import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  getTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setTodos", resp.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
