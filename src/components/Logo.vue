<template>
  <div class="col text-center my-4">
    <router-link :to="{ name: 'index' }">
      <img :src="logoUrl" alt="" />
    </router-link>
  </div>
</template>

<script setup>
import logoUrl from "~/assets/logo.png";
</script>