const images = require('images');

const convert = function(base64) {
	let pic = images(base64);
	let start = 722, dis = 10, x = 220, y = 714, w = 280, h = 280;

	while (start < y + h) {
		let fill = images(pic, 0, start - 2, 720, 2);
		pic.draw(fill, 0, start);
		pic.draw(fill, 0, start+2);
		start += dis;
	}
	let ori = images(pic, x, y, w, h).encode('png');
	return 'data:image/png;base64,' + ori.toString('base64');
}

module.exports = convert;