<script setup>
    import { useTasks } from "../stores/TaskStore";
    import Task from "./Task.vue";
    import { storeToRefs } from "pinia";

    const store = useTasks()

    const {filteredTasks} = storeToRefs(store)
</script>

<template>


<div>

    <div 
            v-for="task in filteredTasks"
            :key="task.id"
            class="flex border-t border-gray-200 py-2"
        >   
            <Task :task="task" />
        </div>

</div>

     

        
        <!-- <div 
        v-if="store.sortable === 'completed' "
        v-for="task in store.doneTasks"
        :key="task.id"
        class="flex border-t border-gray-200 py-2">   
            <Task :task="task" />
        </div>


        <div 
        v-if="store.sortable === 'pending' "
        v-for="task in store.notDoneTasks"
        :key="task.id"
        class="flex border-t border-gray-200 py-2">   
            <Task :task="task" />
        </div> -->
        


</template>