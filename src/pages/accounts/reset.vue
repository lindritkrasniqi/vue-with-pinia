<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Reset your password</div>
      <div class="card-body">
        <logo-vue />

        <reset-vue />
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../../components/Logo.vue";
import ResetVue from "../../components/Forms/Reset.vue";

document.title = "Reset your password";
</script>