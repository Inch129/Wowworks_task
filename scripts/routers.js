app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: ""
        })
        .when("/new", {
            templateUrl: "../templates/tasksTable.html",
            controller: "myController"
        })

});