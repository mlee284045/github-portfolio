var github = angular.module('github', ['ngRoute']);

github.config(['$routeProvider', function($routeProvider) {
    // Route code will go here
    $routeProvider.
        when('/', {
            templateUrl: '/static/js/views/home.html',
            controller: homeController
        }).
        when('/repos/:owner/:repo', {
            templateUrl: '/static/js/views/repo.html',
            controller: repoController
        }).
        otherwise({redirectTo: '/'});
}]);