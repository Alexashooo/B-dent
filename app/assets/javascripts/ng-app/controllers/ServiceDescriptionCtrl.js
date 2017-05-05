(function(){
   function ServiceDescriptionCtrl($scope, $state, $stateParams){

     $scope.descriptionId = $stateParams.descriptionId;


     $scope.$watch(function(){
                    return $('.description-text').attr('descriptionToShow');
                  },
                  function(descriptionId){
                        $('.description-text').children().each(function(i){
                               if(descriptionId === $(this).attr('id')){
                                    $(this).removeClass('hide-text')
                               } 
                        });
                  }
     );

   }

   angular
     .module('bDent')
     .controller('ServiceDescriptionCtrl', ['$scope', '$state', '$stateParams', ServiceDescriptionCtrl]);
})();
