import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: 'John Doe',
    userEmail: 'john@example.com'
  }),
  actions: {
    updateUser(userName, userEmail) {
      this.userName = userName;
      this.userEmail = userEmail;
    }
  }
});
