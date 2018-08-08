module.exports = () => {
	const start = ({ app }, cb) => {
		if (!app) {
			cb(new Error('app is required'));
		}
		app.use(ctx => {
			ctx.body = 'Works!!';
		});
		cb();
	};

	return {
		start,
	};
};
