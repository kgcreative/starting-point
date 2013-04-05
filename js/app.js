// @codekit-prepend "plugins/jquery.lettering.js"

// Lettering

$('h1').lettering();

// Custom

$('h1').click(function () {
	$(this).addClass('awesome-dude');
});