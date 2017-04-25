(function(){
    function LandingCtrl($scope, $rootScope, $state){

      $rootScope.$watch(function(){
                console.log("Angular started to digest the code");
      });

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      

    }

    angular
      .module('bDent')
      .controller('LandingCtrl', ['$scope', '$rootScope', '$state', LandingCtrl]);
})()
