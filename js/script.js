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
        done: false
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
        done: false
    },
    {
        id: 7,
        Text:'Preparare la cena',
        done: false
    }
]


const { createApp } = Vue;

createApp({
    data(){
        return{
            todolist: todo,
            newTodoText: '',
        };
    },
    methods: {
        toggleTodo(task) {
            task.done = !task.done;
        },
        removeTodo(task) {
            this.todolist = this.todolist.filter(item => item !== task);
        },
        addTodo() {
            // controllo se il valore di newTodoText è vuoto o contiene solo spazi bianchi
            if (this.newTodoText.trim()) {
                // se è vero quindi è stato digitato del testo aggiungo un nuovo elemento a todolist
                this.todolist.push({
                    // genero un nuovo identificatore unico per il todo,uso Math.max per trovare l'id massimo tra quelli esistenti e aggiungo 1 per ottenere un nuovo valore univoco.
                    id: Math.max(...this.todolist.map(todo => todo.id)) + 1,
                    // assegno il valore digitato dall'utente come Text
                    Text: this.newTodoText,
                    // inizializzo done a false 
                    done: false,
                });
                // dopo aver aggiunto il nuovo task alla lista azzero il valore di newTodoText, cosi l'utente può continuare ad aggiungere nuove task
                this.newTodoText = '';
            }
        },
    },
}).mount('#app')

