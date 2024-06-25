// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AlbumPhotos from '../components/AlbumPhotos.vue'
import Post from '../components/Post.vue'
import TodoList from '../components/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AlbumPhotos
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: TodoList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
