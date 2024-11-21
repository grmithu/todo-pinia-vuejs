<script setup>
    // import { ref } from 'vue';
    import { useTasks } from '../stores/TaskStore';
    import {storeToRefs} from 'pinia';

    const store = useTasks()
    const {sortable, countAllTasks, countDoneTasks, countNotDoneTasks} = storeToRefs(store)


    // const sortable = ref("all")


</script>

<template>

<!-- {{ sortable }} -->

    <div class="flex justify-end text-gray-500 mt-5">
        <div class="flex space-x-2">
            <label for="" class="inline-flex items-center">
                <input type="radio" v-model="sortable" value="all" name="sortable" class="h-4 w-4 text-blue-500">
                <span class="ml-2 text-sm">All ({{ countAllTasks }}) </span>
            </label>
            <label for="" class="inline-flex items-center">
                <input type="radio" v-model="sortable" value="completed" name="sortable" class="h-4 w-4 text-blue-500">
                <span class="ml-2 text-sm">Completed ({{ countDoneTasks }}) </span>
            </label>
            <label for="" class="inline-flex items-center">
                <input type="radio" v-model="sortable" value="pending" name="sortable" class="h-4 w-4 text-blue-500">
                <span class="ml-2 text-sm">Pending ({{ countNotDoneTasks }}) </span>
            </label>
        </div>
    </div>
</template>

