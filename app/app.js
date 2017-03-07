var routerApp = angular.module('demoApp', ['ui.router']);
var todoList = [
    {
        "title" : "Westcon",
        "description" : "A TTN Project",
        "priority" : "High",
        "isCompleted" : true,
        "dateCreated" : new Date()
    }
]
routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/todo');

    $stateProvider

        .state('todo', {
            url: '/todo',
            templateUrl: 'todo/todo.html',
            controller : 'ToDoCtrl'
        })

        .state('help', {
            url: '/help',
            templateUrl: 'todo/help.html'
        })
        .state('addNew', {
            url: '/new',
            templateUrl: 'todo/new.html',
            controller : 'NewTodoCtrl'
        });

})

routerApp.controller('ToDoCtrl',function(){
    var vm = this;
    vm.todoList = todoList;
    vm.remove = function(index) {
        alert(index);
        todoList.remove(index);
        alert("Element removed")
    }

});

routerApp.controller('NewTodoCtrl',function(){
    var vm = this;
    var todo = {};
    vm.addNew = function(todo){
        todoList.push({
                    "title" : todo.title,
                    "description" : todo.description,
                    "priority" : todo.priority,
                    "isCompleted" : todo.status,
                    "dateCreated" : new Date()
                }
        )
    }

});