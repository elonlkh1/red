const images = require('images');

const convert = function(base64) {
	let pic = images(base64);
	let start = 646, dis = 12, x = 205, y = 638, w = 320, h = 340;

	for (let i = 1; i <= 28; i++) {
		if (i % 6 === 0) start ++;

		let fill = images(pic, 0, start - 4, 750, 4);
		pic.draw(fill, 0, start);
		pic.draw(fill, 0, start+4);
		start += dis;
	}
	let ori = images(pic, x, y, w, h).encode('png');
	return 'data:image/png;base64,' + ori.toString('base64');
}

module.exports = convert;