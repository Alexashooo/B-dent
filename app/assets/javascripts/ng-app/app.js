(function(){
    function config($stateProvider, $locationProvider, $urlRouterProvider){

        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');


        $stateProvider
            .state('landing', {
                url:'/',
                controller: 'LandingCtrl as landing',
                templateUrl: 'landing.html'
            })

            .state('landing.serviceDescription', {
                url:'service_description',
                templateUrl: 'service_description.html',
                controller: 'ServiceDescriptionCtrl as serviceDescription'
            });

      // $locationProvider
        //    .html5Mode({
          //  enabled: true,
            //    requireBase: false
            // });


    }

    angular
        .module('bDent', ['ui.router', 'templates', 'ngMap'])
        .config(config);
})()
