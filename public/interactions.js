$(document).ready(function() {
	var $textarea = $('textarea');
	$textarea.focus();
	$('input[type="submit"]').click(function(e) {
		e.preventDefault();
		var text = $textarea.val();
		history.pushState({}, {}, '/?text=' + text);
//		$textarea.val(utf8ify.parse(text));
/*		
		$('body').append('<div id="notice">Your text has been utf8ified.</div>');
		$('#notice').css({
			top: $textarea.offset().top + $textarea.height(),
			left: $textarea.offset().left,
			width: $textarea.innerWidth()
		});
		$('#notice').fadeIn('fast');
		setTimeout(function() {
//			$('#notice').fadeOut('fast');
		}, 5000);
		
*/
	});
});