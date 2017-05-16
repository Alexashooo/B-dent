(function(){
   function PricingCtrl($scope, $state){

       $scope.$watch(function(){
                  return $('.prices-table').attr('showPrices')
              },

              function(load){
                 if(load){
                      $('.prices-container').css('z-index', 100);
                      console.log($('.prices-container').css('z-index'));
                 }
              }

        );

       $scope.goToLanding = function(){
           $state.go('landing');
       }
   }

   angular
     .module('bDent')
     .controller('PricingCtrl', ['$scope','$state',  PricingCtrl]);
})();
