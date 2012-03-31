(function(exports){ 
	/*
		str - string to be converted
		htmlSpecialChars - true/false defaults to false. 
			converts &lt;div to &amp;lt;div
	*/
	exports.parse = function(str, htmlSpecialChars) {
		var out = '';
		for(i=0; i<str.length; i++) {
			if(str.charCodeAt(i)>127) {
				out += '&#' + str.charCodeAt(i) + ';';
			} else {
				out +=str.charAt(i);
			}
		}
		return (htmlSpecialChars) ? out.replace(/&/g, '&amp;') : out;
	}
	
})(typeof exports === 'undefined'? utf8ify={}: exports);