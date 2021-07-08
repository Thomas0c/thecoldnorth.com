// next.config.js
module.exports = {
	target: 'serverless',
	exportPathMap: function () {
		return {
			'/': { page: '/' },
		};
	},
  images: {
    domains: [
      'coldnorth.space',
      'coldnorth.com'
    ],
  },
};
