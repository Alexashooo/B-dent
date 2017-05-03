(function(){
      function centerHorizontally($document, $window){

        return {
          restrict: 'A',
          link: function(scope, element, attrs){

              var centerHorizontally = function(){
                 element.css('margin-top', (element.parent().height()-element.height())/2);
              }

              element.bind('load', function(){
                     centerHorizontally();      
              });

              angular.element($window).resize(function(){
                  centerHorizontally();
              });

          }
        }
      }

  angular
      .module('bDent')
      .directive('centerHorizontally', ['$document', '$window', centerHorizontally]);
})();
