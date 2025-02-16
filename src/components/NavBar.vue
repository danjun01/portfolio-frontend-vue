<script setup lang="ts">
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { RouterLink } from 'vue-router';
import DarkModeToggle from './DarkModeToggle.vue';

// removed blog link for now
// <NavigationMenuItem>
//   <NavigationMenuLink>
//     <RouterLink class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" to="/blog" replace>Blog</RouterLink>
//   </NavigationMenuLink>
// </NavigationMenuItem>

</script>

<template>
  <NavigationMenu :class="navigationMenuTriggerStyle()" class="rounded-md dark:text-white">
    <NavigationMenuList class="gap-6">

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" to="/#projects" replace>Projects</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" to="/#about" replace>About</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <RouterLink class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" to="/#contact" replace>Contact</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

     

      <NavigationMenuItem>
        <DarkModeToggle />
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>

