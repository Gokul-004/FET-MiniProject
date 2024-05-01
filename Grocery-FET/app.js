
var app = angular.module('groceryApp', []);

app.controller('GroceryController', function($scope) {
    $scope.groceryItems = [
        { name: 'Apples', quantity: 5, price: 2.5 },
        { name: 'Bananas', quantity: 10, price: 1.5 },
        { name: 'Milk', quantity: 2, price: 3 }
    ];

    $scope.newItem = {};

    $scope.addGroceryItem = function() {
        $scope.groceryItems.push({
            name: $scope.newItem.name,
            quantity: $scope.newItem.quantity,
            price: $scope.newItem.price
        });
        $scope.newItem = {}; 
    };
});
