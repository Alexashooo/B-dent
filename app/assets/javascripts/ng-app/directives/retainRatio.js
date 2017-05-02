(function(){
      function retainRatio(){

        return {
          restrict: 'A',
          link: function(scope, element, attrs){
              //keppes ratio of a element, depends of given value for width or height
              var keepRatio = function(){
                 var elWidth = element.width();
                     elBorder = element.css('border-width');
                     elRatio = element.attr('ratio');
                     elHeight = element.height();
                  if(elRatio!=null){
                      if(elWidth!=null && elWidth > parseInt(elBorder,10)*2){
                         element.css('height', elWidth*elRatio);
                       } else if(elHeight!=null && elHeight > parseInt(elBorder,10)*2){
                         element.css('width', elHeight*elRatio);
                       }
                  } else {
                      if(elWidth!=null && elWidth > parseInt(elBorder,10)*2){
                         element.css('height', elWidth);
                       } else if(elHeight!=null && elHeight > parseInt(elBorder,10)*2){
                         element.css('width', elHeight);
                       }
                  }
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
