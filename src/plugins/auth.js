import { useAuthStore } from "../store/useAuth";

export default {
  install: ({ config }) => {
    config.globalProperties.$auth = useAuthStore();

    if (useAuthStore().loggedIn) {
      useAuthStore().ftechUser();
    }
  },
};
