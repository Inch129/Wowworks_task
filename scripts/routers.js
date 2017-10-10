app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: ""
        })
        .when("/new", {
            templateUrl: "./templates/tasksTable.html",
            controller: "myController"
        })
        .when("/underway", {
        templateUrl: "./templates/tasksTable.html",
        controller: "myController"
    })
        .when("/inProcessing", {
        templateUrl: "./templates/tasksTable.html", 
        controller: "myController"
    })
        .when("/done", {
        templateUrl: "./templates/tasksTable.html",
        controller: "myController"
    })
        .when("/decline", {
        templateUrl: "./templates/tasksTable.html",
        controller: "myController"
    })
        .when("/draft", {
        templateUrl: "./templates/tasksTable.html",
        controller: "myController"
    })
});