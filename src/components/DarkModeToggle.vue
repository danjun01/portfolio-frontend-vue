<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Icon } from '@iconify/vue'
  import { useColorMode, useCycleList } from '@vueuse/core'
  import { watchEffect } from 'vue';

  // Pass { disableTransition: false } to enable transitions
  const mode = useColorMode({disableTransition: false}); // Access color mode state

  const { state, next } = useCycleList(['dark', 'light'] as const, { initialValue: mode })

  // Function to toggle between dark and light modes
  watchEffect(() => mode.value = state.value)

</script>

<template>
  <Button @click="next()" variant="ghost">
    <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  </Button>
</template>