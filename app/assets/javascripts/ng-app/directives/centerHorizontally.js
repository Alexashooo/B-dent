(function(){
      function centerHorizontally(){

        return {
          restrict: 'A',
          link: function(scope, element, attrs){

              var centerHorizontally = function(){
                  element.css('margin-top', (element.parent().height()-element.height())/2);
              };

               $(document).ready(function(){
                   centerHorizontally();
               });

               $(window).resize(function(){
                   centerHorizontally();
               });
          }
        }
      }

  angular
      .module('bDent')
      .directive('centerHorizontally', centerHorizontally);
})();
