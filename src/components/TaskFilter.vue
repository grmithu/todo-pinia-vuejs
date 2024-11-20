<script setup>
    import { ref } from 'vue';
import { useTasks } from '../store/TaskStore';

    const store = useTasks()

    const sortable = ref("all")


</script>

<template>

{{ sortable }}

    <div class="flex justify-end text-gray-500 mt-5">
        <div class="flex space-x-2">
            <label for="" class="inline-flex items-center">
                <input type="radio" v-model="sortable" value="all" name="sortable" class="h-4 w-4 text-blue-500">
                <span class="ml-2 text-sm">All ({{ store.countAllTasks }}) </span>
            </label>
            <label for="" class="inline-flex items-center">
                <input type="radio" v-model="sortable" value="completed" name="sortable" class="h-4 w-4 text-blue-500">
                <span class="ml-2 text-sm">Completed ({{ store.countDoneTasks }}) </span>
            </label>
            <label for="" class="inline-flex items-center">
                <input type="radio" v-model="sortable" value="pending" name="sortable" class="h-4 w-4 text-blue-500">
                <span class="ml-2 text-sm">Pending ({{ store.countNotDoneTasks }}) </span>
            </label>
        </div>
    </div>
</template>

