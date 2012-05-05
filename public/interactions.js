$(document).ready(function() {
	var $textarea = $('textarea');
//		$textarea.focus();

	$textarea.val($textarea.val().replace('Click the utf8ify button below.', 'Edit this text to see this results below.'));
	$('.button').remove();
	var updateTextarea = function(text) {
		text = text || $textarea.val();
		$('#result').removeClass('hidden').html('<textarea readonly="readonly">'+utf8ify.parse(text, true)+'</textarea>');
	};
	$textarea.keyup(function(){
		updateTextarea();
	});
	$('input[type="submit"]').click(function(e) {
		e.preventDefault();
		updateTextarea();
		return false;
	});
});