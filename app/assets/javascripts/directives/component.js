angular.module('eternzApp')
  .directive('carouselStart', function() {
    return {
      restrict: 'EA',
      link: function(scope, elem, attrs) {
        $("#"+elem[0].id).carousel();
      }
    }
  });
