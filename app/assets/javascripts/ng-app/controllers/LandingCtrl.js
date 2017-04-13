(function(){
    function LandingCtrl($scope, $rootScope, $state){

      $rootScope.$watch(function(){
                console.log("Angular started to digest the code");
      });

    }

    angular
      .module('bDent')
      .controller('LandingCtrl', ['$scope', '$rootScope', '$state', LandingCtrl]);
})()
