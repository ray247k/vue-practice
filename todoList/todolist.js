window.onload = function () {
    var todolist = new Vue({
        // 用 selector 綁定畫面上的程式作用域 element
        el: '.todolist',
        // 資料內容
        data: {
            todos: [],
            newTodo: ''
        },
        // 可執行的程式內容
        methods: {
            // 這邊的 this 都是指這個 Vue 物件內的 data
            addTodo: function (todo) {
                this.todos.push({ content: todo, completed: false })
                this.newTodo = ''
            },
            removeTodo: function (todo) {
                // indexOf(todo) 可以查詢到輸入內容位在陣列哪個位置
                this.todos.splice(this.todos.indexOf(todo), 1);
            },
            doneAll: function () {
                // 遍歷所有內容將 completed 設為 true
                this.todos.forEach(element => {
                    element.completed = true
                });
            }
        }
    })
}