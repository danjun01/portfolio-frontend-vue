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
import DarkModeToggle from './DarkModeToggle.vue';

</script>

<template>
  <NavigationMenu :class="navigationMenuTriggerStyle()" class="rounded-md dark:text-white">
    <NavigationMenuList class="gap-6">

      <NavigationMenuItem>
        <NavigationMenuLink>
          <a class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" href='#projects'>Projects</a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <a class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" href="#about">About</a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink>
          <a class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" href="#contact">Contact</a>
        </NavigationMenuLink>
      </NavigationMenuItem>

     <NavigationMenuItem>
        <NavigationMenuLink>
          <a class="hover:dark:bg-zinc-800 hover:bg-zinc-100 py-2 px-4 rounded-md" href="/blog">Blog</a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <DarkModeToggle />
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>