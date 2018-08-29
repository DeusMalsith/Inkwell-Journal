module.exports = function(req, res, next) {
	if(!req.user) {
		req.flash('error', 'You must log in first!');
		res.redirect('/auth/login');
	} else {
		next();
	}
}