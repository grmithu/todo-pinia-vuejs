import {defineStore} from "pinia";

export const useTasks = defineStore('tasks',{
    state: () => {
        return{
            tasks:[
                {id: 1, name: 'Task 1', done: false},
                {id: 2, name: 'Task 2', done: false},
                {id: 3, name: 'Task 3', done: true},
                {id: 4, name: 'Task 4', done: false},
                {id: 5, name: 'Task 5', done: true},
            ]

        }
    },

    getters: {

    },

    actions: {

    },

});

