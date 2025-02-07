<script setup lang="ts">

import CardGrid from './CardGrid.vue';
import Button from './ui/button/Button.vue';

</script>

<template>
  <div id='intro' class='flex flex-col gap-20 scroll-mt-30'>
      <div class="flex flex-col items-start justify-center text-left gap-4 text-6xl pt-30">
        <h1 class="font-semibold">Hello, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400 dark:from-blue-400 dark:to-purple-400">Daniel Jun</span> 👋</h1>
        <p>I'm a software engineer based in Hartford, CT.</p>

        <p class="mt-[15%] text-2xl font-semibold">Technologies I use:</p>
        <p class="text-xl ">Python ⸱ JavaScript ⸱ TypeScript ⸱ SQL ⸱ Java ⸱ C ⸱ C++ ⸱ React.js ⸱ Node.js ⸱ Express.js ⸱ Django ⸱ GIT ⸱ Docker ⸱ NGINX</p>
      </div>

      <div id='projects' class="flex flex-col items-start justify-center text-left gap-4 dark:text-white pt-3 scroll-mt-30">
        <h1 class="text-3xl">Projects</h1>
        <p class="text-xl">Here are some of the projects I've worked on.</p>

        <CardGrid />
      </div>

      <div id='about' class="flex flex-col items-start justify-center text-left gap-12 dark:text-white pt-20 scroll-mt-30">
        <h1 class="text-4xl">About</h1>
        <p class="text-3xl max-w-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
      </div>
    </div>

    <div id='contact' class="flex flex-col items-start justify-center text-left gap-12 dark:text-white pt-20 mt-40 scroll-mt-30">
      <h1 class="text-4xl">Contact</h1>
      <p class="text-8xl">Open to work</p>
      <div class="flex gap-20">
        <a href="https://www.linkedin.com/in/daniel-haram-jun/">
          <Button variant="link">LinkedIn</Button>
        </a>
        <a href="https://github.com/danjun01">
          <Button variant="link">GitHub</Button>
        </a>
        <a href="mailto:danielharamjun1@gmail.com">
          <Button variant="link">Email</Button>
        </a>
      </div>
      <a href="https://calendly.com/danielharamjun1/30min">
        <Button variant="default">Schedule a call</Button>
      </a>
    </div>
</template>