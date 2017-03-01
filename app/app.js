(function(angular){
    angular.module("app",[]).controller("PhonelistController",["$scope","$http",function($scope,$http){
        $scope.phone_list=[];
        $http.get("/data/phone.json").then(
            function(data){
                $scope.phone_list=data.data;
            }
           
        )
    }])
})(window.angular)
