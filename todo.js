// eslint-disable-next-line no-undef
new Vue({
    el: "#app",
    // eslint-disable-next-line vue/no-deprecated-data-object-declaration
    data: {
        currentTodo: "",
        todos: [
            { text: "Learn Vue", done: false },
            { text: "Learn Java", done: false },
            { text: "Play with friends", done: true }
        ]
    },
    methods: {
        toggleTodo(todo) {
            todo.done = !todo.done;
            this.sortTodos();
        },
        addTodo() {
            if(!this.currentTodo.trim() || this.checkIfTodoExists()) return;
            this.todos.push({
                text: this.currentTodo,
                done: false
            });
            this.currentTodo = "";
            this.sortTodos();
        },
        delTodo(todo) {
            this.todos = this.todos.filter(el => el.text !== todo.text);
        },
        sortTodos() {
            this.todos.sort((a,b) => a.done - b.done);
        },
        checkIfTodoExists() {
            return this.todos.some((todo) => todo.text === this.currentTodo.trim());
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter(
                todo => todo.text.toLowerCase().match(this.currentTodo.toLowerCase())
            );
        }
    }
});