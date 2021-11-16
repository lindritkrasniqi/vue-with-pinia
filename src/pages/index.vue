<template>
  <transition name="auth" mode="out-in">
    <div v-if="$auth.loggedIn">
      <div class="card shadow rounded-lg">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <div class="lead">
            Welcome,
            <em>{{ $auth.user.name }}</em>!
          </div>
        </div>
      </div>
    </div>

    <div v-else class="col-12 col-md-8">
      <div class="card shadow rounded-lg py-5">
        <div class="card-body">
          <div class="row align-items-center">
            <logo-vue class="col-xl-6" />

            <login-vue class="col-xl-6" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import LogoVue from "../components/Logo.vue";
import LoginVue from "../components/Forms/Login.vue";

document.title = "Vite with Vue and Pinia";
</script>

<style>
.auth-enter-active,
.auth-leave-active {
  transition: opacity 0.1s ease;
}

.auth-enter-from,
.auth-leave-to {
  opacity: 0;
}
</style>
