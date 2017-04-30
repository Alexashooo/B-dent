(function(){
      function retainRatio(){

        return {
          restrict: 'A',
          link: function(scope, element, attrs){

              var keepRatio = function(){
                  element.css('height', element.width());

              };

               $(document).ready(function(){
                   keepRatio();
               });

               $(window).resize(function(){
                   keepRatio();
               });
          }
        }
      }

  angular
      .module('bDent')
      .directive('retainRatio', retainRatio);
})();
