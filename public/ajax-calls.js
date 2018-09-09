$(document).ready(function() {
	console.log('Ajax Working')
	$('.delete-btn').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$.ajax({
			url: url,
			method: 'DELETE'
		}).done(function(res) {
			window.location = '/' + url.split('/')[1];
		}).fail(function(err) {
			console.log('fail', err);
		});
});

$('#edit-journal').submit(function(e) {
		e.preventDefault();
		console.log('Submit Passed');
		var url = $(this).attr('action');
		console.log(url);
		$.ajax({
			url: url,
			method: "PUT",
			data: $(this).serialize()
		}).done(function(res){
				console.log(res);
		    console.log('Journal Edit Successful', res);
		    window.location = '/journal';
		}).fail(function(err) {
			console.log('Journal Edit Error', err);
		});
});

$('#edit-profile').submit(function(e) {
		e.preventDefault();
		console.log('Submit Passed');
		var url = $(this).attr('action');
		console.log(url);
		$.ajax({
			url: url,
			method: "PUT",
			data: $(this).serialize()
		}).done(function(res){
				console.log(res);
		    console.log('Profile Edit Successful', res);
		    window.location = '/profile';
		}).fail(function(err) {
			console.log('Profile Edit Error', err);
		});
	});
});