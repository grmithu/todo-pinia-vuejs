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

        filteredTask(){
            return this.sortable === 'completed' ? this.doneTasks : this.sortable === 'pending' ? this.notDoneTasks : this.countAllTasks;
        },

        allTasks(){
            return this.tasks
        },

        doneTasks(){
            return this.tasks.filter(task => task.done)
        },

        notDoneTasks(){
            return this.tasks.filter(task => !task.done)
        },

        countAllTasks(){
            return this.tasks.length
        },

        countDoneTasks(){
            return this.tasks.filter(task => task.done).length
        },

        countNotDoneTasks(){
            return this.tasks.filter(task => !task.done).length
        },


    },

    actions: {
        addTask(task){
            this.tasks.push(task);
            // console.log(task);
        },

        deleteTask(id){
            this.tasks = this.tasks.filter(task => task.id !== id)
        },

        handleToggle(id){
            const task = this.tasks.find(task => task.id === id)
            task.done = !task.done 
        }


    },

});