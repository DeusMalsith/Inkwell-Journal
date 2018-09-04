$(document).ready(function() {
	console.log('Ajax Working')
	$('.delete-btn').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$.ajax({
			url: url,
			method: 'DELETE'
		}).done(function(res) {
			// console.log('Success', res);
			window.location = '/' + url.split('/')[1];
		}).fail(function(err) {
			console.log('fail', err);
		});
	});

    	$('#edit-journal').submit(function(e) {
		e.preventDefault();
		console.log('about to submit PUT req');
		var url = $(this).attr('action');
		$.ajax({
			url: url,
			method: "PUT",
			data: $(this).serialize()
		}).done(function(res){
		    console.log('Profile Edit Successful', res);
		    window.location = '/' + url.split('/')[1];
		}).fail(function(err) {
			console.log('Profile Edit Error', err);
		});
    	});
});
