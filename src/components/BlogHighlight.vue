<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
</script>

<template>
    <div class="grid grid-cols-3 gap-2">
        <Card class="flex flex-col p-5 border-none gap-3">
            <CardContent class="p-0"><img class="rounded-md aspect-3/2" src="../assets/project-img-placeholder-1.jpg" /></CardContent>
            <CardTitle>Blog post 1</CardTitle>
            <CardDescription>Febuary 13, 2025</CardDescription>
            <CardDescription>Description</CardDescription>
        </Card>
        <Card class="flex flex-col p-5 border-none gap-3">
            <CardContent class="p-0"><img class="rounded-md aspect-3/2" src="../assets/project-img-placeholder-1.jpg" /></CardContent>
            <CardTitle>Blog post 1</CardTitle>
            <CardDescription>Febuary 13, 2025</CardDescription>
            <CardDescription>Description</CardDescription>
        </Card>
        <Card class="flex flex-col p-5 border-none gap-3">
            <CardContent class="p-0"><img class="rounded-md aspect-3/2" src="../assets/project-img-placeholder-1.jpg" /></CardContent>
            <CardTitle>Blog post 1</CardTitle>
            <CardDescription>Febuary 13, 2025</CardDescription>
            <CardDescription>Description</CardDescription>
        </Card>
    </div>
</template>