// src/store.js
import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

// Define a store
export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
    email: 'john.doe@example.com',
  }),
  actions: {
    updateUserName(name) {
      this.name = name;
    },
    updateUserEmail(email) {
      this.email = email;
    },
  },
});

export default pinia;
