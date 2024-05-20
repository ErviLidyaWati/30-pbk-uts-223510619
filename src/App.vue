<template>
  <div class="container">
    <!-- Header dengan menu -->
    <header class="header">
      <div class="logo-container">
        <img
          src="c:\Users\HP\Downloads\logo TodoPost.png"
          alt="Logo"
          class="logo"
        />
        <h1 class="app-name">TodoPost</h1>
      </div>
      <nav class="menu">
        <ul>
          <li @click="pilihMenu('todos')" :class="{ 'aktif': menuAktif === 'todos' }">Todos</li>
          <li @click="pilihMenu('post')" :class="{ 'aktif': menuAktif === 'post' }">Post</li>
        </ul>
      </nav>
    </header>
    
    <!-- Konten yang bergantung pada pilihan menu -->
    <div class="konten">
      <div v-if="menuAktif === 'todos'">
        <!-- Komponen TodoList -->
        <TodoList :user-name="userName" :user-email="userEmail" @update-user="updateUser">
          <template v-slot:user-info>
            <div class="user-info">
              <p>Nama: {{ userName }}</p>
              <p>Email: {{ userEmail }}</p>
            </div>
          </template>
        </TodoList>
      </div>
      <div v-else-if="menuAktif === 'post'">
        <!-- Komponen Post -->
        <Post :user-name="userName" :user-email="userEmail">
          <template v-slot:header>
            <h2>Daftar Postingan oleh {{ userName }}</h2>
          </template>
        </Post>
      </div>
    </div>
  </div>
</template>

<script>
// Impor komponen TodoList dan Post
import TodoList from './components/TodoList.vue';
import Post from './components/Post.vue';


export default {
  components: {
    TodoList,
    Post,
    
  },
  data() {
    return {
      menuAktif: 'todos', // Menu aktif awal
      userName: 'John Doe', // Nama pengguna default
      userEmail: 'john@example.com' // Email pengguna default
    };
  },
  methods: {
    pilihMenu(menu) {
      this.menuAktif = menu;
    },
    updateUser(userName, userEmail) {
      this.userName = userName;
      this.userEmail = userEmail;
    }
  }
};
</script>

<style scoped>
/* Gaya yang sudah ada */

/* Gaya untuk container */
.container {
  padding-top: 20px; /* Jarak antara header dengan konten */
}

/* Gaya untuk header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-bottom: 10px; /* Tambahkan padding di bagian bawah header */
  background-color: #f9c8c8;
  color: #130101;
  border-radius: 10px;
  border-bottom: 2px solid #f44d4d; /* Garis bawah pada header */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.app-name {
  font-size: 24px;
  margin: 0;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu ul li {
  margin-right: 20px;
  cursor: pointer;
}

.menu ul li.aktif {
  font-weight: bold;
}

.konten {
  padding-top: 20px;
}
</style>
