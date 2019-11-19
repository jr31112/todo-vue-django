# Vue - DRF

## 1. 기본 설정

1. Django

   1. 가상환경 설정

      ```bash
      $ python -V
      $ python -m venv venv
      $ source venv/Scrtipts/activate
      ```

      

   2. 패키지 설치

      ```bash
      $ pip install django djangorestframework
      $ pip freeze > requirement.stx
      ```

   3. django 프로젝트 설정

      ```bash
      $ django-admin startproject {프로젝트명}.
      ```

      

2. Vue

   1. VueCLI 설치

      ```bash
      $ npm insatll -g @vue/cli
      ```

   2. Vue 프로젝트 설정

      ```bash
      $ vue create {프로젝트 이름}
      ```

3. 프로젝트 폴더 구조

   ```
   todo-django-vue/
   	.git/
   	todo-django/
   		venv/
   		manage.py
   		todo_dango/
       todo-vue/
       	node_moduels/
       	public/
       	src/
       	package.json
   ```



## 2. django 모델링

## 3. Vue

### Vue-router

```bash
$ npm i vue-router
$ vue add router
```

## 4. Todos Axios 요청

1. getTodos 메소드 정의

   ```vue
   getTodos(){
         // axios 요청
         axios.get('http://127.0.0.1:8000/api/v1/todos/')
       .then(response => {
         console.log(response) // 만약, 오류가 발생하게 되면 ESLint 설정을 package.json에 추가
         this.todos = response.data
       })
       .catch(error => {
         console.log(error)
       })
   ```

2. mounted에서 호출

   ```vue
   // Home.vue
   mounted(){
       this.getTodos()
     }
   ```

3. CORS오류 발생

   * 해결하기 위해서는 django 서버에서 설정이 필요

4. `django-cores-headers` 패키지 활용

   * [Github]( https://github.com/adamchainz/django-cors-headers ) 참고

     ```bash
     $ pip install django-cors-headers
     ```

   * `INSTALLED_APPS`, `MIDDLEWARE` 설정

   * `CORS_ORIGIN_ALLOW_ALL` : True시 모든 도메인에서 요청가능

   * `CORS_ORIGIN_WHITELIST` : 위 옵션을 False로 하고, 화이트 리스트에 직접 도메인 등록

   * 기타 옵션들도 확인해 볼것

5. Vue에서 다시 요청 보내기