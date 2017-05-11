(function(){
   function ServiceDescriptionCtrl($scope, $state, $stateParams, $rootScope){

         $scope.descriptionId = $stateParams.descriptionId;
      

         $scope.$watch(function(){
                        return $('.description-text').attr('descriptionToShow');
                      },
                      function(descriptionId){
                            $('.description-text').children().each(function(i){
                                   if(descriptionId === $(this).attr('id')){
                                        $('.service-description').css('z-index', 50);
                                        //$('.service-description').removeClass('hide-element');
                                        $(this).removeClass('hide-text');
                                        console.log(descriptionId);
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
     .controller('ServiceDescriptionCtrl', ['$scope', '$state', '$stateParams', '$rootScope',  ServiceDescriptionCtrl]);
})();
