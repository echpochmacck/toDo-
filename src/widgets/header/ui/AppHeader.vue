<template>
  <v-app-bar elevation="1">
    <div class="flex! justify-between items-center w-full px-3">
      <div>
        <h2>Все задачи</h2>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-64">
          <SearchBar />
        </div>
        <v-btn
          variant="flat"
          rounded="lg"
          height="36"
          :color="'#4f46e5'"
          prepend-icon="mdi-plus"
          @click="modalOpen = true"
        >
          Новая задача
        </v-btn>
      </div>
    </div>
  </v-app-bar>

  <task-modal v-model="modalOpen" >
    <template #form>
      
    </template> 
  </task-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchBar } from '@/widgets/search'
import { TaskModal } from '@/widgets/modal'

const modalOpen = ref(false)
</script>
