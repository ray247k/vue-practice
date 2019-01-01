window.onload = function () {
    var todolist = new Vue({
        el: '.todolist',
        data: {
            todos: [],
            newTodo: ''
        },
        methods: {
            addTodo: function (todo) {
                this.todos.push({ content: todo, completed: false })
            },
            removeTodo: function (todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            }
        }
    })
}