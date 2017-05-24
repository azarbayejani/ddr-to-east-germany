function handle(text) {
	var v = text;
	v = v.replace(/(Dance Dance Revolution)|(DDR)\b/g, function($1) {
		return 'East Germany';
	});
	return v;
}

export default class Translator {
	translate(textNode) {
		var v = textNode.nodeValue;

		v = handle(v);

		textNode.nodeValue = v;
	}
}
