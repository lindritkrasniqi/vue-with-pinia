import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: localStorage.getItem("loggedIn") ?? false,
    user: JSON.parse(localStorage.getItem("user")) ?? null,
  }),

  getters: {},

  actions: {
    async login(credentials) {
      await axios.get("sanctum/csrf-cookie");

      const response = (await axios.post("api/login", credentials)).data;

      localStorage.setItem("token", `Bearer ${response.token}`);
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");

      const res = (await axios.get("api/me")).data;

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("loggedIn", true);
      this.loggedIn = true;
      this.user = res.data;
    },

    async logout() {
      const response = (await axios.post("api/logout")).data;

      if (response) {
        this.loggedIn = false;
        this.user = null;

        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("loggedIn");
      }
    },

    async ftechUser() {
      const res = (await axios.get("me")).data;

      await localStorage.setItem("user", res.data);
      this.user = res.data;
    },
  },
});
