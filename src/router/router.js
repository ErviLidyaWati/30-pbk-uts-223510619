import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList.vue'
import Post from '../components/Post.vue'
import AlbumPhotos from '../components/AlbumPhotos.vue'

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: TodoList },
  { path: '/post', component: Post },
  { path: '/album', component: AlbumPhotos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
