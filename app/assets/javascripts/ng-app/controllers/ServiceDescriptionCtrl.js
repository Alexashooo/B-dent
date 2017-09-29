(function(){
   function ServiceDescriptionCtrl($scope, $state, $stateParams, $rootScope, ImageSharing){

         $scope.descriptionId = $stateParams.descriptionId;

         //what section with prices to show
         var pricesSection = "";

         $scope.$watch(function(){
                        return $('.description-content').attr('descriptionToShow');
                      },
                      function(descriptionId){
                            pricesSection = descriptionId;
                            $('.description-content').children().each(function(i){
                                   if(descriptionId === $(this).attr('id')){
                                        $('.service-descriptions-container').css('z-index', 50);
                                        $(this).removeClass('hide-text');
                                   }
                            });
                      }
         );

         $scope.serviceImages=ImageSharing.services.desk;

         $scope.loadService = function(){
            $state.go('landing.pricing', {load:true, section:pricesSection});
         };

         $scope.goToLanding = function(){
             $state.go('landing');
         }
   }

   angular
     .module('bDent')
     .controller('ServiceDescriptionCtrl', ['$scope', '$state', '$stateParams', '$rootScope', 'ImageSharing', ServiceDescriptionCtrl]);
})();
