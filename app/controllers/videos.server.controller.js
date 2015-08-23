'use strict';

/**
 * List of Videos
 */

exports.list = function(req, res) {
	var videos = [
	  'https://www.youtube.com/watch?v=l2T9ZhxOIuA',
	  'https://www.youtube.com/watch?v=TAaWI0x9LFk',
	  'https://www.youtube.com/watch?v=KviP9rfp2S4',
	  'https://www.youtube.com/watch?v=devqz4rXfgk', 
	  'https://www.youtube.com/watch?v=F2y8ga7E6kk', 
	  'https://www.youtube.com/watch?v=e2JZgko4DuE'
	];
	res.json(videos);
};