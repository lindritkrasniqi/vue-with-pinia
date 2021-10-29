<template>
  <form @submit.prevent="onSubmit">
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
          <span v-else>Send</span>
        </button>
      </div>
    </div>

    <router-link
      :to="{ name: 'accounts-login' }"
      class="text-decoration-none float-end"
    >
      I think, I remember my password!
    </router-link>
  </form>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useErrorStore } from "store/useError";

const loading = ref(false);
const credentials = ref({});
const router = useRouter();
const error = useErrorStore();

const onSubmit = () => {
  loading.value = !loading.value;

  axios
    .post("api/forgot", credentials.value)
    .then(() => router.push({ name: "index" }))
    .catch(() => (loading.value = !loading.value));
};

onBeforeUnmount(() => error.$reset());
</script>