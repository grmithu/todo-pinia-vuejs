<script setup>
    import { useTasks } from "../store/TaskStore";
    import Task from "./Task.vue";

    const store = useTasks()
</script>

<template>

        <div 
        v-for="task in store.tasks "
        class="flex border-t border-gray-200 py-2">   
             
            <Task />
           

        </div>


      

        
</template>