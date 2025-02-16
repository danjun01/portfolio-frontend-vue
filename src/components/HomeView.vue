<script setup lang="ts">

import CardGrid from './CardGrid.vue';
import Button from './ui/button/Button.vue';

</script>

<template>
  <div id='intro' class='flex flex-col gap-20 pt-30 -mt-30'>
      <div class="flex flex-col items-start justify-center text-left gap-4 text-6xl pt-30">
        <h1 class="font-semibold">Hello, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-blue-400 dark:to-purple-400">Daniel Jun</span> 👋</h1>
        <p>I'm a software engineer based in Hartford, CT.</p>

        <p class="mt-[15%] text-2xl font-semibold">Technologies I use:</p>
        <p class="text-xl ">Python ⸱ JavaScript ⸱ TypeScript ⸱ SQL ⸱ Java ⸱ C ⸱ C++ ⸱ React.js ⸱ Node.js ⸱ Express.js ⸱ Django ⸱ GIT ⸱ Docker ⸱ NGINX</p>
      </div>

      <div id='projects' class="flex flex-col items-start justify-center text-left gap-4 dark:text-white pt-30">
        <h1 class="text-3xl">Projects</h1>
        <p class="text-xl">Here are some of the projects I've worked on:</p>

        <CardGrid />
      </div>

      <div id='about' class="flex flex-col items-start justify-center text-left gap-12 dark:text-white pt-30">
        <h1 class="text-4xl">About</h1>
        <p class="text-3xl max-w-[60%]">
          Hi, I’m Daniel Jun, a software engineer with a passion for building scalable, efficient, and user-friendly applications.
          <br />
          <br />
          I have experience in full-stack development, working with technologies like Django, React, and Vue. I enjoy solving complex problems, optimizing performance, and writing clean, maintainable code.
          <br />
          <br />
          Beyond coding, I’m always looking to learn new technologies, improve my understanding of software quality, and dive deeper into system design. When I’m not working on tech projects, you might find me playing volleyball or grilling some bbq.
          <br />
          <br />
          Let’s build something great together!
        </p>
        
      </div>
    </div>

    <div id='contact' class="flex flex-col items-start justify-center text-left gap-12 dark:text-white pt-30 mt-40">
      <h1 class="text-4xl">Contact</h1>
      <p class="text-8xl">Open to work</p>
      <div class="flex gap-20">
        <a href="https://www.linkedin.com/in/daniel-haram-jun/" target="_blank">
          <Button variant="link">LinkedIn</Button>
        </a>
        <a href="https://github.com/danjun01" target="_blank">
          <Button variant="link">GitHub</Button>
        </a>
        <a href="mailto:danielharamjun1@gmail.com">
          <Button variant="link">Email</Button>
        </a>
      </div>
      <a href="https://calendly.com/danielharamjun1/30min" target="_blank">
        <Button variant="default">Schedule a call</Button>
      </a>
    </div>
</template>