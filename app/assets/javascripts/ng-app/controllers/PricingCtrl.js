(function(){
   function PricingCtrl($scope, $state, $stateParams){

       $scope.$watch(function(){
                  return $('.prices').attr('showPrices')
              },

              function() {
                      var showPricesSection = $stateParams.section;
                      $('.prices').css('z-index', 100);

                      $('.pricing-table-container').children().each(function(){
                            if($(this).attr('class') != showPricesSection && showPricesSection !=null){
                                $(this).addClass('hide-pricing-table');
                            }
                      });
              }
        );

       $scope.goToLanding = function(){
           $state.go('landing');
       }
   }

   angular
     .module('bDent')
     .controller('PricingCtrl', ['$scope','$state', '$stateParams', PricingCtrl]);
})();
