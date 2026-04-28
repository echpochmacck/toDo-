<template>
  <v-dialog v-model="model" max-width="480">
    <v-card rounded="xl">
      <div >
        <slot name="form">
        </slot>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
</script>
