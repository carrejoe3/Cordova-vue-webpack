import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    categories: []
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    completeTodo (state, todo) {
      state.todos[state.todos.indexOf(todo)].done = true
    },
    uncompleteTodo (state, todo) {
      state.todos[state.todos.indexOf(todo)].done = false
    }
  }
})
