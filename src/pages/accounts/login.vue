<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Login</div>
      <div class="card-body">
        <logo-vue />

        <login-vue />
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../../components/Logo.vue";
import LoginVue from "../../components/Forms/Login.vue";

document.title = "Login";
</script>