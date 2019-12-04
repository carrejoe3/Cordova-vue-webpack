import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem('todos')) == null ? [] : JSON.parse(window.localStorage.getItem('todos')),
    categories: JSON.parse(window.localStorage.getItem('categories')) == null ? [] : JSON.parse(window.localStorage.getItem('categories')),
    creatingCategory: false
  },
  getters: {
    sortedTodos (state) {
      state.todos.sort((a, b) => new Date(a.date) - new Date(b.date))
      return state.todos
    }
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
    },
    removeCategory (state, category) {
      state.categories.splice(state.categories.indexOf(category), 1)
    },
    editCategory (state, category) {
      state.categories[state.categories.indexOf(category)] = category
    },
    toggleCreatingCategory (state) {
      state.creatingCategory = !state.creatingCategory
    }
  },
  plugins: [store => {
    store.subscribe((mutation, { todos }) => {
      window.localStorage.setItem('todos', JSON.stringify(todos))
    })
    store.subscribe((mutation, { categories }) => {
      window.localStorage.setItem('categories', JSON.stringify(categories))
    })
  }]
})
