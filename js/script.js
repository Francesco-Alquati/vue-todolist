const todo = [
    {
        id: 1,
        Text:'ciao',
        done: false
    },
    {
        id: 2,
        Text:'ciao',
        done: false
    },
    {
        id: 3,
        Text:'ciao',
        done: true
    },
    {
        id: 4,
        Text:'ciao',
        done: false
    },
    {
        id: 5,
        Text:'ciao',
        done: false
    },
    {
        id: 6,
        Text:'ciao',
        done: true
    },
    {
        id: 7,
        Text:'ciao',
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

