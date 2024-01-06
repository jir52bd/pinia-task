import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () =>({
        Task: [
            {
                id:1,
                title: 'Learn JavaScript',
                idFav: false
            },
            {
                id:2,
                title: 'Learn Vue',
                idFav: true
            },
        ],
        name: 'Razu'
    }),
});