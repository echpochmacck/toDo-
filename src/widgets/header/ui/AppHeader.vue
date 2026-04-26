<template>
  <v-app-bar elevation="1">
    <div class="flex! justify-between items-center w-full px-3">
      <div>
        <h2>Все задачи</h2>
      </div>
      <div class="w-30">
        <SearchBar />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { SearchBar } from '@/widgets/search'
</script>
