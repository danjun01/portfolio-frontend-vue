<script setup lang="ts">
import { 
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from './ui/card';

</script>


<template>
  <div class="mt-5 grid grid-cols-2 gap-20 px-[3%]">
    <Card class='flex flex-col border-0 dark:bg-zinc-900'>
      <CardHeader>
        <CardTitle>Spotify Wrapper</CardTitle>
        <CardDescription>
          Aug 2024 - Dec 2024
        </CardDescription>
      </CardHeader>
      <CardContent class='flex flex-col gap-5'>
        <img src="../assets/project-img-placeholder-1.jpg" alt="Spotify Wrapper" class='w-full aspect-square rounded-lg self-center'/>
      </CardContent>
    </Card>
    <Card class='flex flex-col border-0 dark:bg-zinc-900'>
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
    <Card class='flex flex-col border-0 dark:bg-zinc-900'>
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
    <Card class='flex flex-col border-0 dark:bg-zinc-900'>
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

  </div>
</template>