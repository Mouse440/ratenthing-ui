var controllers = angular.module('appControllers',[]);

controllers.
    controller('FeedController', ['$scope','$http', function($scope,$http){
        var path = 'data/data.json';
        $http.get(path).success(function(data){ //get data
            console.log(data);
            $scope.content = data;  //get the data and return it to the scope
            // $scope.$emit('dataLoaded',{ routeName: $routeParams.routeName}); //pass route name up the chain
        });
     //    var path = ['data/',$routeParams.routeName,'.json'].join(''); //construct the route path
     //    $http.get(path).success(function(data){
        //  $scope.content = data;
        //  $scope.$emit('dataLoaded',{ routeName: $routeParams.routeName}); //pass route name up the chain
        // });
    }]);
    // .
    // controller('MenuController', ['$scope','$http', '$routeParams', function($scope,$http,$routeParams){
    //     $scope.$on('dataLoaded', function(event, args){     
    //         $scope.routeName = args.routeName;                        //set routename to the scope 
    //       });
    // }]);