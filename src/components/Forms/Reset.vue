<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3 row">
      <label for="password" class="col-sm-4 col-form-label text-sm-end">
        Password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password"
          id="password"
          :class="error.errors.password ? 'is-invalid' : ''"
          autocomplete="false"
          :disabled="loading"
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
      <label for="inputPassword" class="col-sm-4 col-form-label text-sm-end">
        Confirm password:
      </label>
      <div class="col-sm-8">
        <input
          type="password"
          class="form-control"
          v-model="credentials.password_confirmation"
          id="inputPassword"
          autocomplete="false"
          :disabled="loading"
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
          <span v-else>Save</span>
        </button>
      </div>
    </div>

    <router-link :to="{ name: 'index' }" class="text-decoration-none float-end">
      Back to home?
    </router-link>
  </form>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useErrorStore } from "store/useError";

const loading = ref(false);
const credentials = ref({});
const router = useRouter();
const error = useErrorStore();

const onSubmit = () => {
  loading.value = !loading.value;

  credentials.value = { ...credentials.value, ...useRoute().query };

  axios
    .post("api/reset", credentials.value)
    .then(() => router.push({ name: "index" }))
    .catch(() => (loading.value = !loading.value));
};

onBeforeUnmount(() => error.$reset());
</script>