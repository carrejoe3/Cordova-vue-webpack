import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem('todos')),
    categories: []
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    editTodo (state, todo) {
      state.todos[state.todos.indexOf(todo)] = todo
    },
    completeTodo (state, todo) {
      state.todos[state.todos.indexOf(todo)].done = true
    },
    uncompleteTodo (state, todo) {
      state.todos[state.todos.indexOf(todo)].done = false
    },
    addCategory (state, category) {
      state.categories.push(category)
    }
  },
  plugins: [store => {
    store.subscribe((mutation, { todos }) => {
      window.localStorage.setItem('todos', JSON.stringify(todos))
    })
  }]
})
