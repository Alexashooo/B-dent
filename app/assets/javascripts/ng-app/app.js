(function(){
    function config($stateProvider, $locationProvider){
        $stateProvider
            .state('landing', {
                url:'/',
                controller: 'LandingCtrl as landing',
                templateUrl: 'landing.html'
            });

        $locationProvider
             .html5Mode({
                enabled: true,
                requireBase: false
              });


    }

    angular
        .module('bDent', ['ui.router', 'templates', 'ngMap'])
        .config(config);
})()
