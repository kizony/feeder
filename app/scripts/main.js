// console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });


// ---------- Isotope & Filter ---------------

// init Isotope
var $grid = $('.grid').isotope();

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


// bind filter button click
$('.filters-btn').on( 'click', '.btn-filter', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.filters-btn').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.btn-filter', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// Scroll to position
jQuery('a[href^=\'#\']').click(function(e) {
	e.preventDefault();
	var position = jQuery(jQuery(this).attr('href')).offset().top;
	jQuery('body, html').animate({
		scrollTop: position
	}, 1000 );
});
