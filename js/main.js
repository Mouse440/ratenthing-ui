/**
 * Main functional script for ratenthing
 */

var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'akoenig.deckgrid'
    ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {								//feed page
            templateUrl: 'views/item-template.html',
            controller: 'FeedController'
        }).
        otherwise({
            redirectTo: '/'						//worst case go back to feed
        });
}]);


app.directive('rntFeedItem',function() { //directive for attaching feed item
	// var itemViews = [];
	return function(scope, element, attrs) {
			// salvattore.appendElements(grid, [ele]);
			// console.log();
			// var inview = new Waypoint.Inview({
			//   element: element[0],
			//   // enter: function(direction) {
			//   //   console.log('Enter triggered with direction ' + direction)
			//   // },
			//   entered: function(direction) {
			//     console.log('Entered triggered with direction ' + direction)
			//   }
			//   // ,
			//   // exit: function(direction) {
			//   //   console.log('Exit triggered with direction ' + direction)
			//   // },
			//   // exited: function(direction) {
			//   //   console.log('Exited triggered with direction ' + direction)
			//   // }
			// });

			// itemViews.push(inview);
			
		    if ( $('.animate-box').length == $("#fh5co-board").attr("data-items-length") ){	//iteration is completed
		    	$('.animate-box').waypoint( function( direction ) {	//attach animate action
					if( direction === 'down' && !$(this).hasClass('animated') ) { //animate when scrolling down
						$(this.element).addClass('bounceIn animated');
					}
				} , { offset: '75%' } );
		    }
		};
}); 

