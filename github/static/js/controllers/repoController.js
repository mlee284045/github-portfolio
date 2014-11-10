function repoController($scope, $routeParams, $http) {
    $scope.ownerName = $routeParams.owner;
    $scope.repoName = $routeParams.repo;
    $scope.codePiece = false;
    $scope.repo = {};
    $scope.contentPath = '';
//    $scope.content = {};
    console.log('inside the repo,', $scope.repoName, $scope.ownerName);

    $http.get('/proxy/repos/' + $scope.ownerName + '/' + $scope.repoName).
        success(function(res) {
            console.log('successful repo get');
            $scope.repo = res;
            console.log($scope.repo);
        }).
        error(function(err) {
            console.log('unsuccessful repo get');
            console.log(err);
    });
    $scope.getContent = function() {
        console.log('clicked get content');

        $http.get('/proxy/repos/' + $scope.ownerName + '/' + $scope.repoName + '/contents/' + $scope.contentPath).
            success(function(res) {
                console.log('got content successful');
                console.log(res);
//                console.log(atob(res.content));
                $scope.content = atob(res.content);
                console.log($scope.content);
                $scope.codePiece = false;
            }).
            error(function(err) {
                console.log('did not get content');
                console.log(err);
        })
    };

}