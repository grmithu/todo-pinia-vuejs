<script setup>
    import Header from './components/Header.vue';
    import TaskAdd from './components/TaskAdd.vue';
    import TaskList from './components/TaskList.vue';
    import TaskFilter from './components/TaskFilter.vue';

    import {useTasks} from "./stores/TaskStore";

    const store = useTasks()
    store.getTasks




</script>



<template>
    <div class="max-h-screen bg-gray-200 h-screen flex items-center flex-col">
      <div class="max-w-xl w-full mt-60">
        

        <Header />

        <div class="bg-white p-5 rounded shadow">
         
          <TaskAdd />
          <TaskList />
          <TaskFilter />

        </div>

      </div>
    </div>
</template>