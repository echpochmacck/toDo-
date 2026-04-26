<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import { AppHeader } from '@/widgets/header';
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
