//email js
(function(){
	emailjs.init({
		publicKey: "nWUWa3XYvoQnEnti6",
	});
})();

//submission box
document.write('<div class="align-center" id="comment_post">');
document.write('<p>Post a comment!</p>');
document.write('<div style="height:32px"></div>');
document.write('<form id="commentform">');
document.write('	<p class="align-left medium-text">Your username:</p>');
document.write('	<input class="align-center" type="text" id="comment_userbox" placeholder="">');
document.write('	<p class="align-left medium-text">Your comment:</p>');
document.write('	<textarea class="align-center" name="comment" id="comment_postbox" rows="7" cols="120"></textarea>');
document.write('	<p id="comment_postcaution" class="align-left">Your comment will be sent for a manual review. Anything deemed inappropriate will be ignored. Please, remain respectful.</p>	');
document.write('	<p style="color:#ffca38" id="comment_postcaution" class="align-left">You won\'t be able to edit or delete your comment after it\'s been posted.</p>	');
document.write('	<button id="comment_btn" type="submit" disabled>POST</button>');
document.write('</form>');
document.write('<p id="comment_posted">Your comment has been sent for a review. This might take a bit...</p>');
document.write('</div>');

if(cur_comment_data.length > 0){
	document.write('<div class="align-center" id="comments">');
	document.write('	<p id="comments_top">Comments ('+cur_comment_data.length.toString()+'):</p>');
	document.write('	<div class="pinkborder" id="commentsborder">');
	for(var i = 0; i < cur_comment_data.length; i++){
		var cur_comment = cur_comment_data[i];
		document.write('		<div id="commentdiv">');
		document.write('			<div id="commentuser">');
		document.write('				<p>'+cur_comment.user+'</p> <p>|</p> <p style="color: #bf1123;">'+cur_comment.date+'</p>');
		document.write('			</div>');
		document.write('			<p>'+cur_comment.comment+'</p>');
		document.write('		</div>');
		document.write('		<hr>');
	}
	document.write('	</div>');
	document.write('</div>');
}

var btn = document.getElementById('comments_btn');
var offset = 0;
if(cur_comment_data.length > 0){
	offset = document.getElementById('comments').offsetHeight;
}
btn.addEventListener('click', () => {
window.scrollTo({
	top: document.body.scrollHeight-screen.height-offset,
	behavior: 'smooth'
	});
});

var commentform = document.getElementById('commentform');
var btn = document.getElementById('comment_btn');

//submission interaction
commentform.addEventListener('input', () => {
	var username = document.getElementById('comment_userbox').value;
	var comment = document.getElementById('comment_postbox').value;

	var empty = true;
	if(username.length > 0 && comment.length > 0){
		empty = false;
	}

	btn.disabled = empty;
	
	//remove posted text if typing again
	if(username.length > 0 || comment.length > 0){
		var posted = document.getElementById('comment_posted');
		posted.style.display = 'none';
	}
});

commentform.addEventListener('submit', function(event) {
	event.preventDefault();
	
	var page = new URL(window.location).pathname;
	
	var user = document.getElementById('comment_userbox').value;
	var comment = document.getElementById('comment_postbox').value;
	
	const dateRaw = new Date();
	const date = dateRaw.toLocaleString('en-US', {
		timeZone: "UTC",
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	});
	
	var fields = {
		page: page,
		user: user,
		date: date,
		comment: comment,
	}
	
	//send to a review
	emailjs.send("service_3ov7sm2","template_hm60rls",fields);
	
	var posted = document.getElementById('comment_posted');
	posted.style.display = 'block';
	
	btn.disabled = true;
	
	//clear user data
	event.target.reset();
});