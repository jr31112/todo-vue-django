<template>
  <!-- 
      form에 이벤트 리스너 담아서,
      1) 사용자 입력값 추력
      2) /api-token-auth/로 요청보내서 토큰 값 출력
   -->
  <form class="login-form" @submit.prevent="login">
      <label for="username">username : </label>
      <input v-model="user.username" type="text" id="username">
      <br>
      <label for="password">password : </label>
      <input v-model="user.password" type="text" id="password">
      <br>
      <button type="submit">등록</button>
  </form>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {
        user: {}
        }
  },
  methods: {
      login() {
        this.$emit('login-event', this.user)
        this.user = ''
        }
    },
}
</script>

<style>

</style>