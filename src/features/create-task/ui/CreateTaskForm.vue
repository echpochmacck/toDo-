<script setup lang="ts">
import {  ref } from 'vue'
import type { TaskStatus } from '@/entities/task'
import { AppTextField, AppTextarea, AppSelect } from '@/shared/ui';
import { taskForm } from '../config';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

const emit = defineEmits(['close'])
const form = ref<taskForm>({
  title: '',
  description: ''
})
const rules = {
  title: { required },
  description: { required }
}
const status = ref<TaskStatus>('todo')
const statusOptions: { title: string; value: TaskStatus }[] = [
  { title: 'To Do', value: 'todo' },
  { title: 'In Progress', value: 'in-progress' },
  { title: 'Done', value: 'done' },
]


const $v = useVuelidate(rules, form);
const submit = () => {

}


const validateField = async (val: string) => {
  await $v.value[val].$validate()
  console.log(123)
}
</script>


<template>
  <v-form @submit.prevent="submit">
    <v-container class="p-0!">
      <v-row class="p-5!">
        <v-col>
          <h3>Создание задачи</h3>
        </v-col>
        <v-col cols="2" class="d-flex justify-end align-center">
          <v-btn icon="mdi-close" variant="text" density="compact" @click.prevent="emit('close')" />
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row class="p-5!">
        <v-col cols="12">
          <label class="field-label">Title</label>
          <app-text-field v-model="form.title" required :error="$v.title.$error"
            @update:model-value="validateField('title')" :error-messages="$v.title.$errors.map(e => e.$message)" />

        </v-col>
        <v-col cols="12">
          <label class="field-label">Description</label>
          <app-textarea v-model="form.description" rows="3" :error="$v.title.$error"
            :error-messages="$v.description.$errors.map(e => e.$message)"
            @update:model-value="validateField('description')" />
        </v-col>
        <v-col cols="12">
          <label class="field-label">Status</label>
          <app-select v-model="status" :items="statusOptions" />
        </v-col>
      </v-row>
      <v-divider />
      <div class="form-footer">
        <v-btn variant="text">Отмена</v-btn>
        <v-btn type="submit" color="primary" rounded="lg">Создать задачу</v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<style scoped>
.form-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 16px 20px;
}

.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 6px;
}
</style>
