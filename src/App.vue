<template>
  <transition name="layout" mode="out-in">
    <component :is="$route.meta.layout ?? 'default'">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </transition>
</template>

<style>
.route-enter-active,
.route-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.1s ease;
}

.route-enter-from,
.route-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
