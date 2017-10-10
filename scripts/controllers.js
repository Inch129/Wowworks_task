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
    $scope.verifyTask = function (Data) {
        if (Data.itemId && Data.city && Data.name &&
            Data.complete && Data.price) {
            return true;
        }

        return false;
    }


    $scope.createTask = function (Data, addItem) {
        if (addItem.$valid) {
            $scope.tasks.push({
                itemId: Data.itemId,
                city: Data.city,
                name: Data.name,
                complete: Data.complete,
                price: Data.price
            });
            console.log($scope.tasks);
        }


    };

});