module.exports = function(req, res, next) {
	if(!req.user) {
		req.flash('error', 'You gotta log in maaaaan!');
		res.redirect('/auth/login');
	} else {
		next();
	}
}