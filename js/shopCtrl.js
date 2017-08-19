angular.module('assessment').controller('shopCtrl', function ($scope, shopService) {

    $scope.getData = function () {
        shopService.getData().then(function (response) {
            $scope.product = response.data
        })
    }

    $scope.getData()

})