<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Register as new user</div>
      <div class="card-body">
        <logo-vue />

        <register-vue />
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../../components/Logo.vue";
import RegisterVue from "../../components/Forms/Register.vue";

document.title = "Register as new user";
</script>