<template>
  <div class="todo-list">
      <h2>TODO</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" v-model="todo.is_completed" @change='clickCheck(todo)'>
          {{ todo.title }}
          <button @click.prevent='deleteTodo(todo)'>X</button>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name : 'TodoList',
  props : {
    todos : {
      type: Array,
      required: true
    }
  },
  computed: {
    ... mapGetters([
      'options',
      'user'
    ])
  },
  methods : {
    deleteTodo(todo){
      axios.delete(`http://127.0.0.1:8000/api/v1/todos/${todo.id}/`, this.options)
      .then(Response=>{
        console.log(Response)
        // const target = this.todos.find(el => {
        //   return el === todo
        //   })
        const idx = this.todos.indexOf(todo)
        if (idx > -1) {
          this.todos.splice(idx, 1)
        }
      })
      .catch(error => {
      console.log(error)
    })
    },
    clickCheck(todo){
      axios.put(`http://127.0.0.1:8000/api/v1/todos/${todo.id}/`, todo, this.options)
      .then(Response =>{
        console.log(Response)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>