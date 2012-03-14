(function(exports){ 
	exports.parse = function(str) {
		var out = '';
		for(i=0; i<str.length; i++) {
			if(str.charCodeAt(i)>127) {
				out += '&#' + str.charCodeAt(i) + ';';
			} else {
				out +=str.charAt(i);
			}
		}
		return out;
	}
	
})(typeof exports === 'undefined'? utf8ify={}: exports);