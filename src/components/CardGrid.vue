<script setup lang="ts">
import { 
  Card,
  CardHeader,
  CardTitle,
  // CardFooter,
  CardDescription,
  CardContent,
} from './ui/card';

</script>


<template>
  <div class="mt-5 grid grid-cols-2 gap-20 px-[3%]">
    <a href="">
      <Card class='flex flex-col border-0 dark:bg-zinc-900 hover:outline-1 outline-zinc-700'>
        <CardHeader>
          <CardTitle>Spotify Wrapper</CardTitle>
          <CardDescription>
            Aug 2024 - Dec 2024
          </CardDescription>
        </CardHeader>
        <CardContent class='flex flex-col gap-5'>
          <img src="../assets/wrapify-screenshot.png" alt="Spotify Wrapper" class='w-full aspect-square rounded-lg self-center'/>
        </CardContent>
      </Card>
    </a>
    <a href="">
      <Card class='flex flex-col border-0 dark:bg-zinc-900 hover:outline-1 outline-zinc-700'>
        <CardHeader>
          <CardTitle>Study Buddy</CardTitle>
          <CardDescription>
            Aug 2024 - Dec 2024
          </CardDescription>
        </CardHeader>
        <CardContent class='flex flex-col gap-5'>
          <img src="../assets/project-img-placeholder-2.jpg" alt="Spotify Wrapper" class='w-full aspect-square object-cover rounded-lg self-center'/>
        </CardContent>
      </Card>
    </a>
    <a href="">
      <Card class='flex flex-col border-0 dark:bg-zinc-900 hover:outline-1 outline-zinc-700'>
        <CardHeader>
          <CardTitle>Restaurant POS</CardTitle>
          <CardDescription>
            Aug 2024 - Dec 2024
          </CardDescription>
        </CardHeader>
        <CardContent class='flex flex-col gap-5'>
          <img src="../assets/project-img-placeholder-3.jpg" alt="Spotify Wrapper" class='w-full aspect-square object-cover rounded-lg self-center'/>
        </CardContent>
      </Card>
    </a>
    <a href="">
      <Card class='flex flex-col border-0 dark:bg-zinc-900 hover:outline-1 outline-zinc-700'>
        <CardHeader>
          <CardTitle>Restaurant POS</CardTitle>
          <CardDescription>
            Aug 2024 - Dec 2024
          </CardDescription>
        </CardHeader>
        <CardContent class='flex flex-col gap-5'>
          <img src="../assets/project-img-placeholder-4.jpg" alt="Spotify Wrapper" class='w-full aspect-square object-cover rounded-lg self-center'/>
        </CardContent>
      </Card>
    </a>
  </div>
</template>