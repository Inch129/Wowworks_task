app.controller("myController", function ($scope) {
    console.log($scope);
    $scope.tasks = [{
            itemId: 10256,
            city: "Самара",
            name: "Подключение провода от клеемной коробки пожарной сигнализации к расцепителю, проверить работоспособность",
            complete: "13 Августа",
            price: "10 201р"

    }, {
            itemId: 10256,
            city: "Самара",
            name: "Подключение провода от клеемной коробки пожарной сигнализации к расцепителю, проверить работоспособность",
            complete: "13 Августа",
            price: "10 201р"

    }
                 , {
            itemId: 10256,
            city: "Самара",
            name: "Подключение провода от клеемной коробки пожарной сигнализации к расцепителю, проверить работоспособность",
            complete: "13 Августа",
            price: "10 201р"

    }

]
    $scope.verifyTask = function () {
        if ($scope.itemId && $scope.city && $scope.name &&
            $scope.complete && $scope.price) {
            return true;
        }

        return false;
    }


    $scope.createTask = function () {
        if ($scope.verifyTask()) {
            $scope.tasks.push({
                itemId: $scope.itemId,
                city: $scope.city,
                name: $scope.name,
                complete: $scope.complete,
                price: $scope.price
            });
            console.log($scope.tasks);
        }


    };

});