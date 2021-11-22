import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: localStorage.getItem("token") ? true : false,
    user: null,
  }),

  getters: {},

  actions: {
    async login(credentials) {
      await axios.get("sanctum/csrf-cookie");

      const response = (await axios.post("api/login", credentials)).data;

      if (response) {
        const token = `Bearer ${response.token}`;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        await this.ftechUser();
      }
    },

    async logout() {
      const response = (await axios.post("api/logout")).data;

      if (response) {
        localStorage.removeItem("token");

        this.$reset();
      }
    },

    async ftechUser() {
      this.user = (await axios.get("api/me")).data.data;

      this.loggedIn = true;
    },
  },
});
