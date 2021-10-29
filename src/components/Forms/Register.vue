<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3 row">
      <label for="name" class="col-sm-4 col-form-label text-sm-end">
        Name:
      </label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          v-model="credentials.name"
          id="name"
          :class="error.errors.name ? 'is-invalid' : ''"
          :disabled="loading"
        />
        <div
          v-if="error.errors.name"
          class="invalid-feedback fw-bolder"
        >
          {{ error.errors.name.toString() }}
        </div>
      </div>
    </div>

    <div class="mb-3 row">
      <label for="email" class="col-sm-4 col-form-label text-sm-end">
        Email:
      </label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          v-model="credentials.email"
          id="email"
          :class="error.errors.email ? 'is-invalid' : ''"
          :disabled="loading"
        />
        <div
          v-if="error.errors.email"
          class="invalid-feedback fw-bolder"
        >
          {{ error.errors.email.toString() }}
        </div>
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-4 col-form-label text-sm-end">
        Password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password"
          id="inputPassword"
          :disabled="loading"
          autocomplete="false"
          :class="error.errors.password ? 'is-invalid' : ''"
        />
        <div
          v-if="error.errors.password"
          class="invalid-feedback fw-bolder"
        >
          {{ error.errors.password.toString() }}
        </div>
      </div>
    </div>

    <div class="mb-3 row">
      <label
        for="inputPassword_confirm"
        class="col-sm-4 col-form-label text-sm-end"
      >
        Confirm password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password_confirmation"
          :disabled="loading"
          id="inputPassword_confirm"
          autocomplete="false"
        />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-4"></label>
      <div class="col-sm-8">
        <button type="submit" class="btn btn-outline-primary">
          <div
            v-if="loading"
            class="spinner-border mx-3 spinner-border-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Sign up</span>
        </button>
      </div>
    </div>

    <router-link :to="{ name: 'index' }" class="text-decoration-none float-end">
      Already, have an account?
    </router-link>
  </form>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "store/useAuth";
import { useErrorStore } from "store/useError";

const loading = ref(false);
const credentials = ref({});
const router = useRouter();
const auth = useAuthStore();
const error = useErrorStore();

const onSubmit = () => {
  loading.value = !loading.value;
  axios
    .post("api/register", credentials.value)
    .then(() =>
      auth.login(credentials.value).then(() => router.push({ name: "index" }))
    )
    .catch(() => (loading.value = !loading.value));
};

onBeforeUnmount(() => error.$reset());
</script>