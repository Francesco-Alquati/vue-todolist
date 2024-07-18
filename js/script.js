const todo = [
    {
        id: 1,
        Text:'Fare la spesa',
        done: false
    },
    {
        id: 2,
        Text:'Portare a spasso il cane',
        done: false
    },
    {
        id: 3,
        Text:'Fare 30 minuti di attività fisica',
        done: true
    },
    {
        id: 4,
        Text:'Andare dal dottore',
        done: false
    },
    {
        id: 5,
        Text:'Chiamare Riccardo',
        done: false
    },
    {
        id: 6,
        Text:'Andare dal parrucchiere',
        done: true
    },
    {
        id: 7,
        Text:'Preparare la cena',
        done: true
    }
]


const { createApp } = Vue;

createApp({
    data(){
        return{
            todolist: todo,
        }
    },
    methods: {

    }
}).mount('#app')

