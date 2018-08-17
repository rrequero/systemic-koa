module.exports = options => {
	const start = async dependencies => ({
		server: {
			port: 3000,
		},
		app: {
			etag: true,
		},
		middleware: {
			helmet: {
				frameguard: false,
			},
		},
	});

	return {
		start,
	};
};
