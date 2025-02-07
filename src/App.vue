<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="px-[12%] pb-100 h-fit flex-col bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
    <Header class="sticky top-0 z-50 bg-transparent"/>
    <RouterView />
  </div>
</template>