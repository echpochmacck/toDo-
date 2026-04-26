<template>
  <v-dialog v-model="model" max-width="480">
    <v-card rounded="lg" >
      <div class="p-3">

      <slot name="form" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
</script>
