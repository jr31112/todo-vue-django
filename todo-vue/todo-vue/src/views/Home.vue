<template>
  <div class="home">
    <todo-form @todoCreate-event="todoCreate"/>
    <todo-list :todos='todos'/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'home',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    // 컴포넌트에서는 반드시 data를 함수로 작성하고, object를 리턴한다
    return {
      todos : [],
    }
  },
  methods: {
    todoCreate(title){
      // axios 요청 POST /todos/
      this.$session.start()
      const token = this.$session.get('jwt')
      const options = {
        headers: {
          Authorization : `JWT ${token}` // JWT 뒤 공백 있음
        }
      }
      // const data = {
      //   'title' : title,
      //   'user' : 1
      // }
      const formData = new FormData()
      formData.append('title', title)
      formData.append('user', jwtDecode(token).user_id)
      axios.post('http://127.0.0.1:8000/api/v1/todos/', formData, options)
      .then(response => {
        this.todos.push(response.data)
      })
      .catch(error => {
      console.log(error)
    })
    },
    
    getTodos(){
      // axios 요청시마다 헤더를 추가해서 보내야 함!
      this.$session.start()
      const token = this.$session.get('jwt')
      const options = {
        headers: {
          Authorization : `JWT ${token}` // JWT 뒤 공백 있음
        }
      }
      
      axios.get('http://127.0.0.1:8000/api/v1/todos/', options)
    .then(response => {
      
      console.log(response) // 만약, 오류가 발생하게 되면 ESLint 설정을 package.json에 추가
      this.todos = response.data
    })
    .catch(error => {
      console.log(error)
    })
    
    }
  },
  mounted(){
    this.getTodos()
  }
    
    
}
</script>