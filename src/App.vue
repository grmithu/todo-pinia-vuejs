<script setup>
    import Header from './components/Header.vue';
</script>


<template>
    <div class="max-h-screen bg-gray-200 h-screen flex items-center flex-col">
      <div class="max-w-xl w-full mt-60">
        

        <Header />


        <div class="bg-white p-5 rounded shadow">
         
        <TaskAdd />

          <div class="flex border-t border-gray-200 py-2">
             
              <label for="" class="flex items-center">
                <input type="checkbox" name="" class="h-5 w-5 text-blue-500 rounded-sm border-gray-300">
                <span class="ml-2 text-gray-700">Task 1</span>
              </label>


              <button class="ml-auto">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>

          </div>


          <div class="flex border-t border-gray-200 py-2">
             
             <label for="" class="flex items-center">
               <input type="checkbox" name="" class="h-5 w-5 text-blue-500 rounded-sm border-gray-300">
               <span class="ml-2 text-gray-700">Task 2</span>
             </label>


             <button class="ml-auto">
               <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
               </svg>
             </button>

         </div>





          <div class="flex justify-end text-gray-500 mt-5">
            <div class="flex space-x-2">
              <label for="" class="inline-flex items-center">
                  <input type="radio" name="" class="h-4 w-4 text-blue-500">
                  <span class="ml-2 text-sm">All (10)</span>
              </label>
              <label for="" class="inline-flex items-center">
                  <input type="radio" name="" class="h-4 w-4 text-blue-500">
                  <span class="ml-2 text-sm">Completed (4)</span>
              </label>
              <label for="" class="inline-flex items-center">
                  <input type="radio" name="" class="h-4 w-4 text-blue-500">
                  <span class="ml-2 text-sm">Pending (6)</span>
              </label>
            </div>
          </div>

        </div>






      </div>
    </div>
</template>