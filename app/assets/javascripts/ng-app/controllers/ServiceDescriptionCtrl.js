(function(){
   function ServiceDescriptionCtrl($scope, $state, $stateParams, $rootScope, ImageSharing){

         $scope.descriptionId = $stateParams.descriptionId;


         $scope.$watch(function(){
                        return $('.description-content').attr('descriptionToShow');
                      },
                      function(descriptionId){
                            $('.description-content').children().each(function(i){
                                   if(descriptionId === $(this).attr('id')){
                                        $('.service-descriptions-container').css('z-index', 50);
                                        //$('.service-description').removeClass('hide-element');
                                        $(this).removeClass('hide-text');
                                        console.log(descriptionId, $(this).attr('id'));
                                   }

                            });
                      }
         );

         $scope.serviceImages=ImageSharing.services.desk;




         $scope.goToLanding = function(){
             $state.go('landing');
         }
   }

   angular
     .module('bDent')
     .controller('ServiceDescriptionCtrl', ['$scope', '$state', '$stateParams', '$rootScope', 'ImageSharing', ServiceDescriptionCtrl]);
})();
