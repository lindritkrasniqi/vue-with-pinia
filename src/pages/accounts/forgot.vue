<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Forgot password</div>
      <div class="card-body">
        <logo-vue />

        <forgot-vue />
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../../components/Logo.vue";
import ForgotVue from "../../components/Forms/Forgot.vue";

document.title = "Forgot your password";
</script>