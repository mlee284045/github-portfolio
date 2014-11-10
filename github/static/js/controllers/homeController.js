function homeController($scope, $http, $window, $location) {
    console.log($scope);
//    $scope.repoInfo = false;
    $scope.customModal = false;
    $scope.modalStyle = 'gh-modal';
    $scope.selectedRepo = {};

    $http.get('proxy/user/repos').
        success(function(res) {
            console.log('worked');
            console.log(res);
            $scope.repositories = res
        }).
        error(function(err) {
            console.log('got an error');
            console.log(err)
    });

    $scope.showDescription = function() {
        $scope.selectedRepo = this.repo;
        $scope.customModal = true;
    };

    $scope.allRepos = function() {
        $scope.customModal = false;
    };

    $scope.selectRepo = function() {
        console.log($scope.selectedRepo.full_name);
        $location.path('/repos/'+$scope.selectedRepo.full_name);
    };
}